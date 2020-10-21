import { Colony } from "Colony";
import { Task } from "tasks/Task";
import { UUID } from "UUID";
export class TaskSpawnWorker extends Task {
  public name: string;
  public constructor(colony: Colony) {
    super(
      {
        0: () => {
          // TODO: clean up the horrible log calls
          if (!Game.creeps[this.name]) {
            console.log("The creep doesn't yet exist");
            if (this.getEnergy() > this.colony.bodies.worker.getBodyCost()) {
              const res = Game.spawns.Spawn1.spawnCreep(this.colony.bodies.worker.getBody(), this.name);
              if (res === OK) return true; // console.log("spawning wasn't OK");
            }
          }
          return false;
        },
        1: () => {
          if (Game.creeps[this.name].spawning) {
            console.log("creep " + this.name + "is still being spawned");
            return false;
          } else console.log("creep " + this.name + " finished spawning");
          // console.log(Game.creeps[this.name].isReserved);
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
  public getCreep(): Creep {
    return Game.creeps[this.name];
  }
}
