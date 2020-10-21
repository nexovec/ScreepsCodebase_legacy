import { Colony } from "Colony";
import { Task } from "./Task";
import { TaskSpawnWorker } from "./TaskSpawnWorker";
export class TaskBasicHarvesting extends Task {
  private spawnTask: TaskSpawnWorker;
  public constructor(colony: Colony) {
    super(
      {
        0: () => {
          if (this.spawnTask.isComplete) return true;
          else return false;
        }
      },
      colony
    );
    this.spawnTask = new TaskSpawnWorker(this.colony);
  }
  public resolve(): void {
    // is temporary
    this.spawnTask.resolve();
    super.resolve();
  }
}
