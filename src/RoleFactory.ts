import { RoleBuilder } from "./RoleBuilder";
import { RoleHarvester } from "./RoleHarvester";
import { RoleUpgrader } from "RoleUpgrader";
export class RoleFactory {
  public static temp = 0;
  public constructor() {
    RoleFactory.temp = 0;
    return;
  }
  public getRole(creepName: string): RoleBuilder | RoleHarvester | RoleUpgrader {
    RoleFactory.temp += 1;
    if (RoleFactory.temp % 3 === 0) return new RoleHarvester(creepName);
    else if (RoleFactory.temp % 3 === 1) return new RoleUpgrader(creepName);
    else return new RoleBuilder(creepName);
  }
  //   public getRole(creepName: string): RoleHauler {
  //     return new RoleHauler(creepName);
  //   }
}
