export class BigBrother {
  private static instance: BigBrother;
  public constructor() {
    return;
  }
  public static getInstance(): BigBrother {
    if (!this.instance) BigBrother.instance = new BigBrother();
    return this.instance;
  }
}
