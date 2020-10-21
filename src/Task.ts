import { Colony } from "Colony";

export class Task {
  public colony: Colony;
  protected commands: { [index: number]: () => boolean };
  protected step: number;
  public isComplete: boolean;
  public constructor(commands: { [index: number]: () => boolean }, colony: Colony) {
    this.commands = commands;
    this.step = Object.keys(this.commands).length - 1;
    this.isComplete = false;
    this.colony = colony;
  }
  public resolve(): void {
    console.log(this.isComplete);
    if (this.isComplete) return;
    // console.log(this.step);
    const res: boolean = this.commands[this.step]();
    // console.log(res);
    while (res) {
      // console.log("I've completed a command!");
      if (this.step === 0) {
        this.isComplete = true;
        return;
      }
      this.step -= 1;
      return;
    }
    console.log("Your command didn't complete successfully!");
  }
}
