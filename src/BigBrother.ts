import { Colony } from "Colony";

export class BigBrother {
  private static instance: BigBrother;
  private colony: Colony;
  public constructor() {
    this.colony = new Colony(Game.spawns.Spawn1.room);
    return;
  }
  public loop(): void {
    this.colony.loop();
    return;
  }
  public static getInstance(): BigBrother {
    if (!this.instance) BigBrother.instance = new BigBrother();
    return this.instance;
  }
}
