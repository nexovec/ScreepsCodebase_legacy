import { Colony } from "./Colony";
import { TaskHarvesting } from "./TaskHarvesting";
export class HarvestingManager {
  public rooms: Room[];
  public constructor(colony: Colony) {
    this.rooms = colony.getRooms();
    // TODO: store SourceWrappers
    return;
  }
  public solveTask(task: TaskHarvesting) {
    // TODO: get bodytype from BodyHarvester
    // TODO: assign creeps through colony.creepPool
    return;
  }
}
