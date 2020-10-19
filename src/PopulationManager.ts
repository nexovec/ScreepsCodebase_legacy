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
    this.task = new TaskSpawnWorker(this.colony);
    return;
  }
  public loop(): void {
    // if (!this.task.isComplete) {
    this.task.resolve();
    // }
  }
  public getWorker(): TaskSpawnWorker {
    return this.task as TaskSpawnWorker; // ugh...
  }
}
