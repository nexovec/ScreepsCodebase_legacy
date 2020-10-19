export class Task {
  protected predicates: { [index: number]: () => boolean };
  protected commands: { [index: number]: () => any };
  protected step: number;
  public isComplete: boolean;
  public constructor(commands: { [index: number]: () => boolean }, predicates: { [index: number]: () => boolean }) {
    this.commands = commands;
    this.predicates = predicates;
    this.step = Object.keys(this.predicates).length - 1;
    if (Object.keys(this.predicates).length !== Object.keys(this.commands).length)
      throw new Error("Invalid task pipeline");
    this.isComplete = false;
  }
  public resolve(): void {
    console.log("It is complete", this.step, this.isComplete);
    if (this.isComplete) return;
    while (this.predicates[this.step]()) {
      if (!this.commands[this.step]()) return;
      console.log("predicate is complete", this.step);
      if (this.step === 0) {
        console.log("setting this.isComplete=true", this.step);
        this.isComplete = true;
        break;
      } else {
        this.step -= 1;
      }
    }
  }
}
