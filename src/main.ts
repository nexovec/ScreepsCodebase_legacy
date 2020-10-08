import { ErrorMapper } from "utils/ErrorMapper";
import { RoleFactory } from "RoleFactory";
import { UUID } from "UUID";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
  // Spawn creeps
  const cap = 8;
  const rf = new RoleFactory();
  if (Object.keys(Game.creeps).length < cap) {
    const name = "nex#" + new UUID().toString();
    if (Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], name) === OK) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const n = "";
    }
  }

  // Make them work
  for (const name in Game.creeps) {
    const role = rf.getRole(name);
    role.run();
  }
  if (Game.cpu.bucket >= 9900) Game.cpu.generatePixel();
});
