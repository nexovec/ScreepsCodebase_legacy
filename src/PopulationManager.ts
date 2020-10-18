import { BodyWorker } from "BodyWorker";
import { Colony } from "./Colony";
import { Manager } from "./Manager";
import { Task } from "Task";
import { TaskSpawnWorker } from "./TaskSpawnWorker";
export class PopulationManager extends Manager {
  private colony: Colony;
  public bodies: { [name: string]: BodyWorker };
  private task: Task;
  public constructor(colony: Colony) {
    super();
    this.colony = colony;
    this.bodies = {
      worker: new BodyWorker(this.colony)
    };
    this.task = this.getWorker();
    return;
  }
  public loop(): void {
    if (this.task) this.task.resolve();
  }
  public getWorker(): TaskSpawnWorker {
    return new TaskSpawnWorker(this.colony);
  }
}
