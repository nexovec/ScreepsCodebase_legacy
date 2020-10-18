import { PopulationManager } from "PopulationManager";

export class Colony {
  private room: Room;
  public popMan: PopulationManager;
  public constructor(room: Room) {
    this.room = room;
    this.popMan = new PopulationManager(this);
  }
  public loop(): void {
    this.popMan.loop();
    return;
  }
}
