import { Manager } from "./Manager";
import { TaskBasicHarvesting } from "../tasks/TaskBasicHarvesting";
import { Colony } from "Colony";
import { resolve } from "path";
import { Task } from "tasks/Task";
import { TaskBasicHauling } from "tasks/TaskBasicHauling";
import { BodyWorker } from "BodyWorker";

export class HarvestingManager extends Manager {
  private tasks: Task[];
  private idleCreeps: string[];
  private workingCreeps: string[];
  public constructor(colony: Colony) {
    super(colony);
    this.tasks = [];
    this.idleCreeps = [];
    this.workingCreeps = [];
    this.computeSourceSpaces();
    this.setIdleCreeps();
  }
  public loop(): void {
    if (Object.keys(Game.creeps).length > Object.keys(this.workingCreeps).length) {
      // single colony only
      this.setIdleCreeps();
      // TODO: schedule tasks for idle creeps
    }

    return;
  }
  private computeSourceSpaces(): void {
    for (const source of this.colony.room.find(FIND_SOURCES)) {
      // for(const position of source.pos.)
      const p = source.pos;
      const t = this.colony.room
        .lookForAtArea("terrain", p.y - 1, p.x - 1, p.y + 1, p.x + 1, true)
        .filter(val => val.terrain !== "wall").length;
      const input = { totalSpaces: t, freeSpaces: t };
      // console.log(JSON.stringify(input));
      [source.freeSpaces, source.totalSpaces] = [input.freeSpaces, input.totalSpaces];
    }
  }
  private setIdleCreeps() {
    this.idleCreeps = [];
    Object.entries(Game.creeps)
      .filter((val: [string, Creep]) => {
        if (BodyWorker.suffices(val[1].body)) return !val[1].isReserved;
        else return false;
      })
      .map((val: [string, Creep]) => {
        this.idleCreeps.push(val[0]);
        return;
      });
  }
}
