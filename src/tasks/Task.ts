import { Colony } from "Colony";

export class Task {
  public colony: Colony;
  protected commands: { [index: number]: () => boolean };
  protected step: number;
  public isComplete: boolean;
  public constructor(commands: { [index: number]: () => boolean }, colony: Colony) {
    this.commands = commands;
    this.step = 0;
    this.isComplete = false;
    this.colony = colony;
  }
  public resolve(): void {
    if (this.isComplete) return;
    const res: boolean = this.commands[this.step]();
    while (res) {
      console.log("I've completed a command!");
      this.step += 1;
      if (this.step === Object.keys(this.commands).length) this.isComplete = true;
      return;
    }
  }
}
