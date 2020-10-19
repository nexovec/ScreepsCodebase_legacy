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
          Game.spawns.Spawn1.spawnCreep(this.colony.bodies.worker.getBody(), name);
        }
      },
      {
        // predicates
        0: () => {
          if (this.getEnergy() < this.colony.bodies.worker.getBodyCost()) return false;
          else return true;
        }
      },
      colony
    );
  }
  private getEnergy(): number {
    return Game.spawns.Spawn1.store.energy;
  }
}
