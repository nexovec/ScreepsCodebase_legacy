export class BigBrother {
  private static instance: BigBrother;
  private constructor() {
    return;
  }
  public build(): void {
    return;
  }
  public loop(): void {
    return;
  }
  public static getInstance(): BigBrother {
    if (BigBrother.instance) return BigBrother.instance;
    BigBrother.instance = new BigBrother();
    return BigBrother.instance;
  }
}
