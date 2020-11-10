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
      this.computeSourceSpaces();
      // TODO: schedule tasks for idle creeps
      if (Game.spawns.Spawn1.room.controller && Game.spawns.Spawn1.room.controller?.level < 3) {
        // just make 1:1:1 workers for each free slot
        // when they're filled, go on to upgrade controller
        // when RCL === 2, start making extensions
        // when <fixed number> of extensions are complete, fill them up
        // BodyWorker will return body based on <RCL,extension count, ??>
        // when they are filled, build roads to sources
        // when that is done, build a road towards the controller and repair them
        // when that is done, ensure production of workers and upgrade controller
        // when RCL === 3, start making extensions and fill them up
      }
    }

    return;
  }
  private computeSourceSpaces(): void {
    for (const source of this.colony.room.find(FIND_SOURCES)) {
      const p = source.pos;
      const t = this.colony.room
        .lookForAtArea("terrain", p.y - 1, p.x - 1, p.y + 1, p.x + 1, true)
        .filter(val => val.terrain !== "wall").length;
      const input = { totalSpaces: t, freeSpaces: t };
      // console.log(JSON.stringify(input));
      [source.freeSpaces, source.totalSpaces] = [input.freeSpaces, input.totalSpaces]; // might not do what you want
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
