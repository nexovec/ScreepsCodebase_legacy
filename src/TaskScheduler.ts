import { Colony } from "Colony";
import { Task } from "tasks/Task";
export class TaskScheduler {
  public colony: Colony;
  public constructor(colony: Colony) {
    this.colony = colony;
  }
  public loop(): void {
    return;
  }
  public schedule(task: Task): void {
    return;
  }
}
