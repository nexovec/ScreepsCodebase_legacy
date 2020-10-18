export class Task {
  protected predicates: { [index: number]: () => boolean };
  protected commands: { [index: number]: () => any };
  protected step: number;
  public isComplete: boolean;
  public constructor(commands: { [index: number]: () => any }, predicates: { [index: number]: () => boolean }) {
    this.commands = commands;
    this.predicates = predicates;
    this.step = Object.keys(this.predicates).length - 1;
    if (Object.keys(this.predicates).length !== Object.keys(this.commands).length)
      throw new Error("Invalid task pipeline");
    this.isComplete = false;
  }
  // FIXME: this.commands mustn't fail
  public resolve(): void {
    console.log(this.isComplete);
    if (this.isComplete) return;
    while (this.predicates[this.step]()) {
      // TODO: fix redundant calls to the predicates
      if (!this.commands[this.step]()) return;
      if (this.step === 0) {
        this.isComplete = true;
        break;
      } else this.step -= 1;
    }
  }
}
