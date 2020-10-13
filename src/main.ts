import { BigBrother } from "BigBrother";
import { ErrorMapper } from "utils/ErrorMapper";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
// if (Game.cpu.getHeapStatistics && Game.cpu.getHeapStatistics !== undefined)
//   console.log(JSON.stringify(Game.cpu.getHeapStatistics()));

BigBrother.getInstance();
export const loop = ErrorMapper.wrapLoop(() => {
  // Automatically delete memory of missing creeps
  BigBrother.getInstance().loop();
  if (Game.cpu.bucket >= 9900) Game.cpu.generatePixel();
});
