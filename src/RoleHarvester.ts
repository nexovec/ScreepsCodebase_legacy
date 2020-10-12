export class RoleHarvester {
  private creepName: string; // TODO: make a source wrapper that knows how much free space there is around a source
  public constructor(creepName: string) {
    this.creepName = creepName;
    return;
  }
  public run(): void {
    const c = Game.creeps[this.creepName];
    if (c.store.getFreeCapacity() !== 0) {
      if (c.harvest(c.room.find(FIND_SOURCES)[0]) === ERR_NOT_IN_RANGE) {
        c.moveTo(c.room.find(FIND_SOURCES)[0]);
      }
    } else {
      if (c.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        c.moveTo(Game.spawns.Spawn1);
      }
    }
    return;
  }
}
