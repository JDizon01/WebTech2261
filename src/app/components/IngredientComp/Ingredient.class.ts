export class Ingredient {

  public iName: string;
  public iQuan: number;

  constructor (iName: string, iQuan: number) {
    this.iName = iName;
    this.iQuan = iQuan;
  }

  add() {
      this.iQuan+=2;
  }

  subtract() {
      this.iQuan-=2;
  }
}
