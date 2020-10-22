import { Colony } from "./Colony";
export class BodyWorker {
  private colony: Colony;
  private body: BodyPartConstant[];
  private bodyCost: number;
  public constructor(colony: Colony) {
    this.colony = colony;
    this.body = [WORK, CARRY, MOVE];
    this.bodyCost = 200;
  }
  public getBody(): BodyPartConstant[] {
    return this.body;
  }
  public getBodyCost(): number {
    return this.bodyCost;
  }
  public static suffices(body: { type: string }[]): boolean {
    // because it's the only bodytype LOL
    return true;
  }
}
