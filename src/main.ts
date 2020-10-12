import { BigBrother } from "BigBrother";
import { ErrorMapper } from "utils/ErrorMapper";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
if (Game.cpu.getHeapStatistics) console.log(JSON.stringify(Game.cpu.getHeapStatistics()));

BigBrother.getInstance();
export const loop = ErrorMapper.wrapLoop(() => {
  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
  BigBrother.getInstance().loop();
  if (Game.cpu.bucket >= 9900) Game.cpu.generatePixel();
});
