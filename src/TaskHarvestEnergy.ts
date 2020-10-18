import { Colony } from "Colony";
import { Task } from "Task";
import { PopulationManager } from "./PopulationManager";
import { TaskSpawnWorker } from "./TaskSpawnWorker";

export class TaskHarvestingEnergy extends Task {
  private workerTask: TaskSpawnWorker;
  private colony: Colony;
  public constructor(colony: Colony) {
    super(
      {
        // commands
        0: () => {
          this.workerTask.getCreep().harvest(colony.room.find(FIND_SOURCES)[0]); // TODO: get Source from HarvestingManager
          return true;
        }
      },
      {
        // predicates
        0: () => {
          if (this.workerTask.isComplete) return true;
          else return false;
        }
      }
    );
    this.colony = colony;
    this.workerTask = this.colony.popMan.getWorker();
    return;
  }
}
