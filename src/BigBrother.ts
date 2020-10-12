import { RoleFactory } from "RoleFactory";
import { UUID } from "UUID";
import { WrapperCreep } from "WrapperCreep";

export class BigBrother {
  private static instance: BigBrother;
  private creeps: WrapperCreep[];
  private rf: RoleFactory;
  public constructor() {
    this.rf = new RoleFactory();
    this.creeps = _.map(Game.creeps, val => new WrapperCreep(val, this.rf));
  }
  public loop(): void {
    this.creepDeletionHandler();
    // Spawn creeps
    const cap = this.rf.hscanner.totalSlots;
    if (Object.keys(Game.creeps).length < cap) {
      const name = "nex#" + new UUID().toString();
      if (Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], name) === OK) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const n = "";
      }
    }
    // Make them work
    for (const creep of this.creeps) creep.run();
    // for (const creep of this.creeps) console.log(creep.creepObj.ticksToLive);
    // additional temporary stuff
    return;
  }
  public static getInstance(): BigBrother {
    if (!BigBrother.instance) return new BigBrother();
    return BigBrother.instance;
  }
  public creepDeletionHandler(): void {
    for (const name in Memory.creeps) {
      if (!(name in Game.creeps)) {
        // TODO: unregister a creep
        delete Memory.creeps[name];
      }
    }
    return;
  }
}
