import { Colony } from "Colony";
import { Task } from "./Task";
import { TaskSpawnWorker } from "./TaskSpawnWorker";
export class TaskBasicHarvesting extends Task {
  private spawnTask: TaskSpawnWorker;
  public constructor(colony: Colony) {
    super(
      {
        // remove the nerdlogs
        0: () => {
          if (!this.spawnTask.isComplete) return false;
          else return true;
        },
        1: () => {
          // console.log("I'm attempting to harvest");
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
            // console.log("still harvesting");
            const source = Game.spawns.Spawn1.room.find(FIND_SOURCES)[0];
            const res = creep.harvest(source);
            console.log("harvesting code:" + res.toString());
            new RoomVisual(creep.pos.roomName).line(creep.pos, source.pos, { color: "green" });
            return false;
          }
          return true;
        }
      },
      colony
    );
    this.spawnTask = new TaskSpawnWorker(this.colony); // small pp, don't create tasks inside other tasks, it bloats
    // TODO: handle Creep death
  }
  public resolve(): void {
    // FIXME: is temporary
    this.spawnTask.resolve();
    super.resolve();
  }
  public getCreep(): Creep {
    return this.spawnTask.getCreep();
  }
}
