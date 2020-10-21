import { Colony } from "Colony";
import { Task } from "Task";
import { UUID } from "UUID";
export class TaskSpawnWorker extends Task {
  public name: string;
  public constructor(colony: Colony) {
    super(
      {
        // commands
        0: () => {
          if (this.getEnergy() < this.colony.bodies.worker.getBodyCost()) return false;
          if (!Game.creeps[this.name]) {
            console.log("The creep doesn't yet exist");
            // return true;
            const res = Game.spawns.Spawn1.spawnCreep(this.colony.bodies.worker.getBody(), this.name);
            if (res !== OK) {
              console.log("spawning wasn't OK");
              return false;
            }
            return false;
          }
          if (Game.creeps[this.name].spawning) {
            console.log("creep " + this.name + "is still being spawned");
            return false;
          } else console.log("creep " + this.name + " finished spawning");
          return true;
        }
      },
      colony
    );
    this.name = "nex#" + new UUID().toString();
  }
  private getEnergy(): number {
    return Game.spawns.Spawn1.store.energy;
  }
}
