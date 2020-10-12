import { RoleBuilder } from "./RoleBuilder";
import { RoleHarvester } from "./RoleHarvester";
import { RoleHauler } from "./RoleHauler";
import { RoleUpgrader } from "RoleUpgrader";
export class RoleFactory {
  public temp: number;
  public constructor() {
    this.temp = -1;
    return;
  }
  public getRole(creepName: string): RoleBuilder | RoleHarvester | RoleUpgrader | RoleHauler {
    this.temp += 1;
    if (this.temp % 3 === 0) return new RoleHarvester(creepName);
    else if (this.temp % 3 === 1) return new RoleUpgrader(creepName);
    else return new RoleBuilder(creepName);
  }
}
