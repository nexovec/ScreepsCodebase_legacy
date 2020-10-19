import { Colony } from "Colony";
import { Task } from "Task";
import { UUID } from "UUID";
export class TaskSpawnWorker extends Task {
  private creepName: string;
  public constructor(colony: Colony) {
    super(
      {
        // commands
        0: () => {
          if (Game.creeps[this.creepName].spawning) return false;
          else return true;
        },
        1: () => {
          if (Game.spawns.Spawn1.spawnCreep(colony.popMan.bodies.worker.getBody(), this.creepName) !== OK) return false;
          else return true;
        }
      },
      {
        // predicates
        0: () => {
          return true;
        },
        1: () => {
          if (this.getEnergy() < colony.popMan.bodies.worker.getBodyCost()) return false;
          else return true;
        }
      }
    );

    this.creepName = "nex#" + new UUID().toString();
  }
  private getEnergy(): number {
    return Game.spawns.Spawn1.store.energy;
  }
  public getCreep(): Creep {
    return Game.creeps[this.creepName];
  }
}
