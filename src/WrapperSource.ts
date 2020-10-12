export class WrapperSource {
  public sourceObj: Source;
  private spacesTotal: number;
  public freeSlots: number;
  public constructor(sourceObj: Source) {
    this.sourceObj = sourceObj;
    // check for total free space around source
    const pos = this.sourceObj.pos;
    this.spacesTotal = 8;
    const structs = sourceObj.room.lookForAtArea("terrain", pos.y - 1, pos.x - 1, pos.y + 1, pos.x + 1, true);
    for (const struct of structs) {
      if (struct.terrain === "wall" && !(struct.x === pos.x && struct.y === pos.y)) this.spacesTotal -= 1;
    }
    this.freeSlots = this.spacesTotal;
  }
}
