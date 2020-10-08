import { RoleHarvester } from "./RoleHarvester";
import { RoleHauler } from "RoleHauler";
import { RoleUpgrader } from "RoleUpgrader";
export class RoleFactory {
  public constructor() {
    return;
  }
  //   public getRole(creepName: string): RoleHarvester {
  //     return new RoleHarvester(creepName);
  //   }
  public getRole(creepName: string): RoleHauler {
    return new RoleHauler(creepName);
  }
}
