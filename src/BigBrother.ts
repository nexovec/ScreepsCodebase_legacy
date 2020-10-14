import { BuildOrder } from "BuildOrder";
import { TaskMaster } from "TaskMaster";

export class BigBrother {
  private static instance: BigBrother;
  private buildorder: BuildOrder;
  private taskmaster: TaskMaster;
  private constructor() {
    this.buildorder = new BuildOrder();
    this.taskmaster = new TaskMaster(this.buildorder.getSuperTasks());
    return;
  }
  public loop(): void {
    return;
  }
  public static getInstance(): BigBrother {
    if (BigBrother.instance) return BigBrother.instance;
    BigBrother.instance = new BigBrother();
    return BigBrother.instance;
  }
}
