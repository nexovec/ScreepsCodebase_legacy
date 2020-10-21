/* eslint-disable sort-imports */
import { BigBrother } from "BigBrother";
import { ErrorMapper } from "utils/ErrorMapper";
import "enhancedprototypes";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
console.log("!!!reset!!!");
export const loop = ErrorMapper.wrapLoop(() => {
  // Automatically delete memory of missing creeps
  if (Game.cpu.bucket !== 1000) console.log(Game.cpu.bucket);
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
  BigBrother.getInstance().loop();
  if (Game.cpu.bucket >= 9900 && Game.cpu.generatePixel) Game.cpu.generatePixel();
});
