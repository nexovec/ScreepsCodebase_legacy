/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import "Colony";
// eslint-disable-next-line no-var
var isReservedCache: { [name: string]: boolean } = {};
Object.defineProperty(Creep.prototype, "isReserved", {
  get(): boolean {
    return isReservedCache[this.name] || false;
  },
  set(val: boolean) {
    isReservedCache[this.name] = val;
  },
  configurable: true
});
