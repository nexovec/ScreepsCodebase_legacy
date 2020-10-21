import { BodyWorker } from "./BodyWorker";
import { Task } from "tasks/Task";
import { TaskBasicHarvesting } from "tasks/TaskBasicHarvesting";
export class Colony {
  private room: Room;
  private task: Task;
  public bodies: { [name: string]: BodyWorker };
  public constructor(room: Room) {
    this.room = room;
    this.bodies = {
      worker: new BodyWorker(this)
    };
    this.task = new TaskBasicHarvesting(this);
  }
  public loop(): void {
    this.task.resolve(); // low IQ, small PP, fix pls
    return;
  }
}
