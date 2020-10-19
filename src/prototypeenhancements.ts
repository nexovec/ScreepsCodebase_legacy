/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prefer-const */

/* eslint-disable @typescript-eslint/no-unused-vars */
let creepCache: { [name: string]: boolean } = {};
Object.defineProperty(Creep.prototype, "isReserved", {
  get() {
    return creepCache[this.name] || false;
  },
  set(value: boolean) {
    creepCache[this.name] = value;
  }
});
export default {};
