import { Colony } from "Colony";
import { Task } from "Task";
import { TaskSpawnWorker } from "TaskSpawnWorker";
import { Vec2 } from "Vec2";

export class TaskHarvestingEnergy extends Task {
  private workerTask: TaskSpawnWorker;
  private colony: Colony;
  public constructor(colony: Colony) {
    super(
      {
        // commands
        0: () => {
          this.workerTask.getCreep().moveTo(Game.spawns.Spawn1); // TODO: multiple spawns
        },
        1: () => {
          this.workerTask.getCreep().harvest(colony.room.find(FIND_SOURCES)[0]); // TODO: get Source from HarvestingManager
          return true;
        },
        2: () => {
          console.log("I got stuck after this happened!");
          const posS = colony.room.find(FIND_SOURCES)[0].pos;
          const posC = this.workerTask.getCreep().pos;
          const finalPos = new Vec2(posS.x - posC.x, posS.y - posC.y); // TODO: clean this goddamn mess
          if (finalPos.abs() < 1.6) return true;
          this.workerTask.getCreep().moveTo(colony.room.find(FIND_SOURCES)[0]);
          return false;
        }
      },
      {
        // predicates
        0: () => {
          if (this.workerTask.getCreep().store.getFreeCapacity() === 0) {
            if (this.workerTask.getCreep().transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) !== OK) return true;
            else this.isComplete = true;
          }
          return false; // TODO: multiple spawns
        },
        1: () => {
          const posS = colony.room.find(FIND_SOURCES)[0].pos;
          const posC = this.workerTask.getCreep().pos;
          const finalPos = new Vec2(posS.x - posC.x, posS.y - posC.y);
          console.log(finalPos.abs());
          if (finalPos.abs() > 1.6) return true;
          else return false;
        },
        2: () => {
          if (this.workerTask.isComplete) return true;
          else {
            console.log("I'm retarded!");
            return false;
          }
        }
      }
    );
    this.colony = colony;
    this.workerTask = this.colony.popMan.getWorker();
    return;
  }
}
