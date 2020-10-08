export class UUID {
  private id: number;
  public constructor() {
    if (!Memory.UUID) Memory.UUID = 0;
    this.id = Number(Memory.UUID);
    Memory.UUID += 1;
  }
  public toString(): string {
    return this.id.toString();
  }
}
