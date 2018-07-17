export class Ingredient {

  public iName: string;
  public iQuan: number;

  constructor (iName: string, iQuan: number) {
    this.iName = iName;
    this.iQuan = iQuan;
  }

  // Helpers
  add(name: string) {
      if (this.iName === name) {
          this.iQuan += 2;
      }
  }

  subtract(name: string) {
      if (this.iName === name) {
          this.iQuan -= 2;
      }
  }
}
