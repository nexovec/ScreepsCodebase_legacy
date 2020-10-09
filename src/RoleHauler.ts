export class RoleHauler {
  private creepName: string;
  public constructor(creepName: string) {
    this.creepName = creepName;
    return;
  }
  public run(): void {
    const c = Game.creeps[this.creepName];
    const resources = c.room.find(FIND_DROPPED_RESOURCES);
    const tombstones = c.room.find(FIND_TOMBSTONES);
    const storages = c.room.find(FIND_MY_STRUCTURES);
    if (tombstones.length !== 0) {
      if (c.withdraw(tombstones[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        c.moveTo(tombstones[0]);
      }
    } else if (resources.length !== 0) {
      if (c.pickup(resources[0]) === ERR_NOT_IN_RANGE) c.moveTo(resources[0]);
      return;
    } else if (c.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      c.moveTo(Game.spawns.Spawn1);
      return;
    }
    if (c.store.getFreeCapacity() === 0)
      if (c.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) c.moveTo(Game.spawns.Spawn1);
  }
}
