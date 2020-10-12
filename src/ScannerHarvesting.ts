export class ScannerHarvesting {
  public rooms: Room[];
  public constructor(rooms: Room[]) {
    this.rooms = rooms;
    return;
  }
  public getSources(): Source[] {
    return this.rooms[0].find(FIND_SOURCES);
  }
}
