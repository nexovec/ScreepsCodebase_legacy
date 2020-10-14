import { Colony } from "Colony";
import { Task } from "Task";

export class TaskHarvesting extends Task {
  public constructor(owner: Task) {
    super(owner.colony, owner);
    return;
  }
}
