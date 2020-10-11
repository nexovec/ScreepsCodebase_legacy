export class ScannerHarvesting {
  public constructor(rooms: Room[]) {
    return;
  }
  public getSources(): Source[] {
    return Game.spawns.Spawn1.room.find(FIND_SOURCES);
  }
}
