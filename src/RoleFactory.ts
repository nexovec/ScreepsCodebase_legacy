import { RoleHarvester } from "./HarvesterRole";
export class RoleFactory {
  public constructor() {
    return;
  }
  public getRole(creepName: string): RoleHarvester {
    return new RoleHarvester(creepName);
  }
}
