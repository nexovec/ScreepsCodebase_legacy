import { BuildOrder } from "BuildOrder";
import { Colony } from "Colony";
import { values } from "lodash";
import { TaskMaster } from "TaskMaster";

export class BigBrother {
  private static instance: BigBrother;
  private colonies: Colony[];
  private constructor() {
    if (!Memory.bigBrother) Memory.bigBrother = { firstRoom: Game.spawns.Spawn1.room.name };
    this.colonies = [new Colony(Game.rooms[Memory.bigBrother.firstRoom])];

    return;
  }
  public loop(): void {
    this.colonies.map(val => val.loop());
    return;
  }
  public static getInstance(): BigBrother {
    if (BigBrother.instance) return BigBrother.instance;
    BigBrother.instance = new BigBrother();
    return BigBrother.instance;
  }
}
