import { Task } from "Task";
import { TaskHarvesting } from "TaskHarvesting";
import { TopTask } from "./TopTask";

export class BuildOrder {
  public constructor() {
    return;
  }
  public populateTopTask(toptask: TopTask): TopTask {
    const tasks = [new TaskHarvesting(toptask)];
    return toptask;
  }
}
