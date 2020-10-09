export class RoleUpgrader {
  private creepName: string;
  public constructor(creepName: string) {
    this.creepName = creepName;
    return;
  }
  public run(): void {
    // TODO: you have uncommitted cosmetic changes to this class
    const c = Game.creeps[this.creepName];
    const s = c.room.find(FIND_SOURCES)[0];
    const u = c.upgradeController(c.room.controller as StructureController);
    if ((u === ERR_NOT_ENOUGH_ENERGY || u === ERR_NOT_IN_RANGE) && c.store.getFreeCapacity() !== 0) {
      if (c.harvest(s) === ERR_NOT_IN_RANGE) {
        c.moveTo(s);
      }
    } else if (u === ERR_NOT_IN_RANGE) {
      c.moveTo(c.room.controller as StructureController);
    } else if (u === OK) {
      //   console.log("Just upgraded the controller!");
      return;
    } else console.error("wtf did happen to my uprades?");
  }
}
