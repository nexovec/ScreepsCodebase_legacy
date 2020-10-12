import { RoleFactory } from "RoleFactory";
import { UUID } from "UUID";
import { WrapperSource } from "WrapperSource";

export class BigBrother {
  private static instance: BigBrother;
  public constructor() {
    return;
  }
  public build(): void {
    return;
  }
  public loop(): void {
    // Spawn creeps
    const cap = 8;
    const rf = new RoleFactory();
    if (Object.keys(Game.creeps).length < cap) {
      const name = "nex#" + new UUID().toString();
      if (Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], name) === OK) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const n = "";
      }
    }
    // Make them work
    for (const name in Game.creeps) {
      const role = rf.getRole(name);
      role.run();
    }

    // additional temporary stuff
    new WrapperSource(Game.spawns.Spawn1.room.find(FIND_SOURCES)[0]);
    new WrapperSource(Game.spawns.Spawn1.room.find(FIND_SOURCES)[1]);
    return;
  }
  public static getInstance(): BigBrother {
    if (!BigBrother.instance) return new BigBrother();
    return BigBrother.instance;
  }
}
