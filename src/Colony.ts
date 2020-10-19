import { PopulationManager } from "PopulationManager";
import { TaskHarvestingEnergy } from "TaskHarvestEnergy";

export class Colony {
  public room: Room;
  public popMan: PopulationManager;
  private tempTask: TaskHarvestingEnergy;
  public constructor(room: Room) {
    this.room = room;
    this.popMan = new PopulationManager(this);
    this.tempTask = new TaskHarvestingEnergy(this);
  }
  public loop(): void {
    this.popMan.loop(); // TODO: the ordering might introduce tick delays
    this.tempTask.resolve();
    return;
  }
}
