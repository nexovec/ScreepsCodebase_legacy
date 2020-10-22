/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import "lodash";
// eslint-disable-next-line no-var
var sourceCache: { [id: string]: { freeSpaces: number; totalSpaces: number } } = {};
Object.defineProperty(Source.prototype, "freeSpaces", {
  get(): number {
    if (!sourceCache[this.id]) sourceCache[this.id] = { freeSpaces: -1, totalSpaces: -1 };
    return sourceCache[this.id].freeSpaces;
  },
  set(source: number) {
    if (!sourceCache[this.id])
      if (!sourceCache[this.id]) sourceCache[this.id] = { freeSpaces: source, totalSpaces: -1 };
      else sourceCache[this.id].freeSpaces = source;
  }
});
Object.defineProperty(Source.prototype, "totalSpaces", {
  get(): number {
    if (!sourceCache[this.id]) sourceCache[this.id] = { freeSpaces: -1, totalSpaces: -1 };
    return sourceCache[this.id].totalSpaces;
  },
  set(source: number) {
    if (!sourceCache[this.id])
      if (!sourceCache[this.id]) sourceCache[this.id] = { freeSpaces: -1, totalSpaces: source };
      else sourceCache[this.id].totalSpaces = source;
  }
});
