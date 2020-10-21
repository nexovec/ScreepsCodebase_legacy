import { Colony } from "Colony";
import { Task } from "./Task";
import { TaskSpawnWorker } from "./TaskSpawnWorker";
export class TaskBasicHarvesting extends Task {
  private spawnTask: TaskSpawnWorker;
  public constructor(colony: Colony) {
    super(
      {
        0: () => {
          if (!this.spawnTask.isComplete) return false;
          else return true;
        },
        1: () => {
          console.log("I'm attempting to harvest");
          const creep = this.spawnTask.getCreep();
          if (creep.pos.getRangeTo(Game.spawns.Spawn1.room.find(FIND_SOURCES)[0]) > 1.6) {
            creep.moveTo(Game.spawns.Spawn1.room.find(FIND_SOURCES)[0]);
            return false; // small pp find calls
          }
          return true;
        },
        2: () => {
          const creep = this.spawnTask.getCreep();
          if (creep.store.getFreeCapacity() !== 0) {
            creep.harvest(Game.spawns.Spawn1.room.find(FIND_SOURCES)[0]);
            return false;
          }
          return true;
        }
      },
      colony
    );
    this.spawnTask = new TaskSpawnWorker(this.colony); // small pp, don't create tasks inside other tasks
  }
  public resolve(): void {
    // FIXME: is temporary
    this.spawnTask.resolve(); // TODO: add a task queue, sort by dependencies at the end of the tick
    super.resolve();
  }
}
