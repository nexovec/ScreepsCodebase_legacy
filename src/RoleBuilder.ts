import { RoleHarvester } from "./RoleHarvester";

export class RoleBuilder {
  private creepName: string;
  public constructor(creepName: string) {
    this.creepName = creepName;
    return;
  }
  public run(): void {
    const c = Game.creeps[this.creepName];
    const s = c.room.find(FIND_CONSTRUCTION_SITES);
    if (s.length > 0) {
      if (c.store.getFreeCapacity() !== c.store.getCapacity(RESOURCE_ENERGY)) {
        if (c.build(s[0]) === ERR_NOT_IN_RANGE) {
          c.moveTo(s[0]);
        }
      } else if (Game.spawns.Spawn1.store.energy > 249) {
        const res = c.withdraw(Game.spawns.Spawn1, RESOURCE_ENERGY);
        if (res === ERR_NOT_IN_RANGE || res === ERR_NOT_ENOUGH_ENERGY) {
          c.moveTo(Game.spawns.Spawn1);
        }
      } else return; // new RoleHarvester(this.creepName,).run();
    } else {
      return; // new RoleHarvester(this.creepName).run();
    }
  }
}
