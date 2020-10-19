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
          console.log("Spawning hasn't finished!");
          if (Game.creeps[this.creepName].spawning) return false;
          else {
            console.log("Spawning has finished!");
            return true;
          }
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
  public resolve(): void {
    console.log("NANI the fuck?!", this.isComplete);
    super.resolve();
  }
  private getEnergy(): number {
    return Game.spawns.Spawn1.store.energy;
  }
  public getCreep(): Creep {
    return Game.creeps[this.creepName];
  }
}
