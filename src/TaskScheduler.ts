import { Colony } from "Colony";
import { Task } from "tasks/Task";
export class TaskScheduler {
  public colony: Colony;
  public tasks: Task[];
  public constructor(colony: Colony) {
    this.colony = colony;
    this.tasks = [];
  }
  public loop(): void {
    this.tasks.map(task => task.resolve()); // just adds complexity at this point
    return;
  }
  public schedule(task: Task): void {
    this.tasks.push(task); // mustn't already contain the task
    return;
  }
}
