import { WrapperSource } from "./WrapperSource";
export class ScannerHarvesting {
  public rooms: Room[];
  private wrappers: WrapperSource[];
  public freeSlots: number;
  public totalSlots: number;
  public constructor(rooms: Room[]) {
    this.rooms = rooms;
    this.wrappers = [];
    for (const room of this.rooms) {
      for (const source of room.find(FIND_SOURCES)) {
        this.wrappers.push(new WrapperSource(source));
      }
    }
    // console.log(
    //   "total free slots: " +
    //     Number(
    //       _.reduce(
    //         _.map(this.wrappers, val => val.freeSlots), // replace with native map/reduce
    //         (a: number, b: number) => a + b
    //       )
    //     ).toString()
    // );
    this.freeSlots = this.wrappers.map(val => val.freeSlots).reduce((a, b) => a + b); // FIXME: doesn't increment on creep death
    this.totalSlots = this.freeSlots;
    return;
  }
  public register(): WrapperSource {
    // TODO: prioritize lower distance from creep to source
    for (const source of this.wrappers) {
      if (source.freeSlots > 0) {
        source.freeSlots -= 1;
        this.freeSlots -= 1;
        return source;
      }
    }
    console.log("nope");
    return this.wrappers[1];
  }
  public getSources(): Source[] {
    return this.rooms[0].find(FIND_SOURCES);
  }
}
