import { Colony } from "Colony";
import { Task } from "./Task";
import { TaskBasicHarvesting } from "./TaskBasicHarvesting";
import { TaskSpawnWorker } from "./TaskSpawnWorker";

interface StoreObject {
  store: GenericStore;
  pos: RoomPosition;
}
export class TaskBasicHauling extends Task {
  private task: TaskBasicHarvesting | TaskSpawnWorker;
  private from: StoreObject | null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public constructor(colony: Colony, task?: TaskBasicHarvesting, from?: { store: GenericStore; pos: RoomPosition }) {
    super(
      {
        0: () => {
          if (this.task.isComplete) {
            this.from = this.task.getCreep();
            return true; // how on earth do I get rid of this?!
          }
          return false;
        },
        1: () => {
          if (
            this.task.getCreep().pos === (this.from as StoreObject).pos ||
            (this.from as StoreObject).pos.isNearTo(this.task.getCreep().pos)
          )
            return true;
          console.log("so am I retarded or yes?");
          this.task.getCreep().moveTo(this.from as StoreObject);
          return false;
        },
        2: () => {
          if (this.task.getCreep().pos.isNearTo(Game.spawns.Spawn1)) return true;
          this.task.getCreep().moveTo(Game.spawns.Spawn1); // ugh...
          return false;
        },
        3: () => {
          if (this.task.getCreep().transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) === OK) return true;
          return false;
        }
      },
      colony
    );
    if (!task) this.task = new TaskSpawnWorker(this.colony);
    else this.task = task;
    this.from = null;
  }
}
