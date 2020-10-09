import { RoleBuilder } from "./RoleBuilder";
import { RoleHarvester } from "./RoleHarvester";
import { RoleUpgrader } from "RoleUpgrader";
import { RoleHauler } from "./RoleHauler";
export class RoleFactory {
  public static temp: number;
  public constructor() {
    RoleFactory.temp = -1;
    return;
  }
  public getRole(creepName: string): RoleBuilder | RoleHarvester | RoleUpgrader | RoleHauler {
    RoleFactory.temp += 1;
    if (RoleFactory.temp % 3 === 0) return new RoleHarvester(creepName);
    else if (RoleFactory.temp % 3 === 1) return new RoleUpgrader(creepName);
    // else if (RoleFactory.temp !== 2) return new RoleBuilder(creepName);
    else return new RoleBuilder(creepName); // else return new RoleHarvester(creepName);
  }
  // public getRole(creepName: string): RoleHauler {
  //   return new RoleHauler(creepName);
  // }
}
