import { RoleHarvester } from "./RoleHarvester";
import { RoleHauler } from "RoleHauler";
import { RoleUpgrader } from "RoleUpgrader";
import { RoleBuilder } from "./RoleBuilder";
export class RoleFactory {
  public constructor() {
    return;
  }
  public getRole(creepName: string): RoleBuilder {
    return new RoleBuilder(creepName);
  }
  //   public getRole(creepName: string): RoleHauler {
  //     return new RoleHauler(creepName);
  //   }
}
