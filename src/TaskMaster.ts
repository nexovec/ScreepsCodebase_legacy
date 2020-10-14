import { Task } from "Task";
import { TopTask } from "TopTask";
import { BuildOrder } from "./BuildOrder";
import { HarvestingManager } from "./HarvestingManager";
import { Colony } from "./Colony";

export class TaskMaster {
  private toptask: TopTask;
  public constructor(colony: Colony) {
    this.toptask = colony.buildorder.populateTopTask(new TopTask(colony));
    return;
  }
  public loop(): void {
    console.log("I'm updaaaatiiiing!!!");

    return;
  }
}
