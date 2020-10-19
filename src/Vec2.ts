export class Vec2 {
  public x: number;
  public y: number;
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  public abs(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
