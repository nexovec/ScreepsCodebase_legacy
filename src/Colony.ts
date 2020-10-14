import { BuildOrder } from "BuildOrder";
import { HarvestingManager } from "HarvestingManager";
import { TaskMaster } from "TaskMaster";

export class Colony {
  private rooms: Room[];
  public buildorder: BuildOrder;
  private taskmaster: TaskMaster;
  private hm: HarvestingManager;
  public constructor(room: Room) {
    this.rooms = [room];
    this.buildorder = new BuildOrder();
    this.taskmaster = new TaskMaster(this);
    this.hm = new HarvestingManager();
    return;
  }
  public loop() {
    this.taskmaster.loop();
  }
}
