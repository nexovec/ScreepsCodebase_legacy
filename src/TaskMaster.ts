import { Task } from "Task";
import { TopTask } from "TopTask";
import { BuildOrder } from "./BuildOrder";

export class TaskMaster {
  private toptask: TopTask;
  public constructor(buildorder: BuildOrder) {
    this.toptask = buildorder.populateTopTask(new TopTask());
    return;
  }
  public loop(): void {
    console.log("I'm updaaaatiiiing!!!");
    return;
  }
}
