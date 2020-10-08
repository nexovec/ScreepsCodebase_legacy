import { RoleHarvester } from "./RoleHarvester";
import { RoleUpgrader } from "RoleUpgrader";
export class RoleFactory {
  public constructor() {
    return;
  }
  public getRole(creepName: string): RoleUpgrader {
    return new RoleUpgrader(creepName);
  }
}
