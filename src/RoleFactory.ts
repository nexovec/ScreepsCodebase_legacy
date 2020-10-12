import { RoleBuilder } from "./RoleBuilder";
import { RoleHarvester } from "./RoleHarvester";
import { RoleHauler } from "./RoleHauler";
import { RoleUpgrader } from "RoleUpgrader";
import { ScannerHarvesting } from "ScannerHarvesting";
export class RoleFactory {
  public temp: number;
  public hscanner: ScannerHarvesting;
  public constructor() {
    this.temp = -1;
    this.hscanner = new ScannerHarvesting([Game.spawns.Spawn1.room]);
    return;
  }
  public getRole(creepName: string): RoleBuilder | RoleHarvester | RoleUpgrader | RoleHauler {
    // this.temp += 1;
    // if (this.temp % 3 === 0) return new RoleHarvester(creepName, this.hscanner);
    // else if (this.temp % 3 === 1) return new RoleUpgrader(creepName);
    // else return new RoleBuilder(creepName);
    return new RoleHarvester(creepName, this.hscanner);
  }
}
