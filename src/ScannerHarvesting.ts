import { WrapperSource } from "./WrapperSource";
export class ScannerHarvesting {
  public rooms: Room[];
  public constructor(rooms: Room[]) {
    this.rooms = rooms;
    const wrappers: WrapperSource[] = [];
    for (const room of this.rooms) {
      for (const source of room.find(FIND_SOURCES)) {
        wrappers.push(new WrapperSource(source));
      }
    }
    console.log(
      "total free slots: " +
        Number(
          _.reduce(
            _.map(wrappers, val => val.freeSlots),
            (a: number, b: number) => a + b
          )
        ).toString()
    );
    return;
  }
  public getSources(): Source[] {
    return this.rooms[0].find(FIND_SOURCES);
  }
}
