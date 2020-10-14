import { Colony } from "./Colony";
export abstract class Task {
  protected ownerQueue: Task[] | null;
  protected children: Task[];
  public colony: Colony;
  public constructor(colony: Colony, owner?: Task) {
    if (!owner) this.ownerQueue = [this];
    else this.ownerQueue = [owner];
    this.children = [];
    this.colony = colony;
    return;
  }
  public addOwner(owner: Task): void {
    if (this.ownerQueue) this.ownerQueue.push(owner);
    owner.addChild(this);
  }
  public addChild(child: Task) {
    this.children.push(child);
    child.addOwner(this);
  }
}
