import { Colony } from "Colony";

export class Task {
  public colony: Colony;
  protected predicates: { [index: number]: () => boolean };
  protected commands: { [index: number]: () => any };
  protected step: number;
  protected isComplete: boolean;
  public constructor(
    commands: { [index: number]: () => any },
    predicates: { [index: number]: () => boolean },
    colony: Colony
  ) {
    this.commands = commands;
    this.predicates = predicates;
    this.step = Object.keys(this.predicates).length - 1;
    this.isComplete = false;
    this.colony = colony;
  }
  public resolve(): void {
    console.log(this.isComplete);
    if (this.isComplete) return;
    while (this.predicates[this.step]()) {
      this.commands[this.step]();
      if (this.step === 0) {
        this.isComplete = true;
        break;
      } else this.step -= 1;
    }
  }
}
