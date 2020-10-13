import { ScannerHarvesting } from "./ScannerHarvesting";
import { WrapperSource } from "./WrapperSource";
export class RoleHarvester {
  private creepName: string; // TODO: make a source wrapper that knows how much free space there is around a source
  private currentSource: WrapperSource;
  public constructor(creepName: string, scanner: ScannerHarvesting) {
    this.creepName = creepName;
    this.currentSource = scanner.register();
    if (!this.currentSource) console.log("No available sources!");
  }
  public run(): void {
    const c = Game.creeps[this.creepName];
    if (c.store.getFreeCapacity() !== 0) {
      if (c.harvest(this.currentSource.sourceObj) === ERR_NOT_IN_RANGE) {
        c.moveTo(this.currentSource.sourceObj);
      }
    } else {
      if (c.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        c.moveTo(Game.spawns.Spawn1);
      }
    }
    return;
  }
  public unregister() {
    this.currentSource.freeSlots += 1;
    console.log("daed lol " + this.currentSource.freeSlots.toString());
    return;
  }
}
