import { BodyWorker } from "./BodyWorker";
import { TaskSpawnWorker } from "./TaskSpawnWorker";
import { Task } from "./Task";
export class Colony {
  private room: Room;
  private task: TaskSpawnWorker;
  public bodies: { [name: string]: BodyWorker };
  public constructor(room: Room) {
    this.room = room;
    this.bodies = {
      worker: new BodyWorker(this)
    };
    this.task = new TaskSpawnWorker(this);
  }
  public loop(): void {
    this.task.resolve();
    return;
  }
}
