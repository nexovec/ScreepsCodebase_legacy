import { Colony } from "Colony";
import { Task } from "Task";
import { UUID } from "UUID";
export class TaskSpawnWorker extends Task {
  public constructor(colony: Colony) {
    super(
      {
        // commands
        0: () => {
          const name = "nex#" + new UUID().toString();
          Game.spawns.Spawn1.spawnCreep(colony.popMan.bodies.worker.getBody(), name);
        }
      },
      {
        // predicates
        0: () => {
          if (this.getEnergy() < colony.popMan.bodies.worker.getBodyCost()) return false;
          else return true;
        }
      }
    );
  }
  private getEnergy(): number {
    return Game.spawns.Spawn1.store.energy;
  }
}
