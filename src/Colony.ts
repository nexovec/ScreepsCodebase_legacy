import { BodyWorker } from "./BodyWorker";
import { Task } from "tasks/Task";
import { TaskBasicHarvesting } from "tasks/TaskBasicHarvesting";
import { TaskBasicHauling } from "./tasks/TaskBasicHauling";
export class Colony {
  private room: Room;
  private tasks: Task[];
  public bodies: { [name: string]: BodyWorker };
  public constructor(room: Room) {
    this.room = room;
    this.bodies = {
      worker: new BodyWorker(this)
    };
    // small pp from Spawn1 dependence
    this.tasks = [];
    this.newTasks();
  }
  private newTasks(): void {
    // very average
    this.tasks.push(new TaskBasicHarvesting(this));
    this.tasks.push(new TaskBasicHauling(this, this.tasks[this.tasks.length - 1] as TaskBasicHarvesting));
    return;
  }
  public loop(): void {
    this.tasks.map((val: Task) => val.resolve());

    if (this.tasks.filter((val: Task) => val.isComplete).length === this.tasks.length) this.newTasks(); // very cpuuuugh
    return;
  }
}
