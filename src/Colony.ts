import { BodyWorker } from "./BodyWorker";
import { HarvestingManager } from "managers/HarvestingManager";
import { Task } from "tasks/Task";
import { TaskScheduler } from "TaskScheduler";
export class Colony {
  public room: Room;
  public bodies: { [name: string]: BodyWorker };
  public hmanager: HarvestingManager;
  private ts: TaskScheduler;
  public constructor(room: Room) {
    this.room = room;
    this.bodies = {
      worker: new BodyWorker(this)
    };
    this.hmanager = new HarvestingManager(this);
    this.ts = new TaskScheduler(this);
  }
  public loop(): void {
    this.hmanager.loop();

    this.ts.loop();
  }
  public schedule(task: Task): void {
    this.ts.schedule(task);
    return;
  }
}
