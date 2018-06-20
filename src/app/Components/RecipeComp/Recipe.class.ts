import { Ingredient } from '../IngredientComp/Ingredient.class';


export class Recipe {

  // variables used for the helper methods
  name: string;
  quan: number;
  rName: string;
  instruction: string;

  iG = new Ingredient(this.name, this.quan);
  // Array declerations for the lists
  ingArray: Array<Ingredient> = []; // remember to initialize arrays
  ingInst: Array<string> = [];
  recTime: number; // Number in minutes (2 hours = 120 Mins)

  addItem(iG: Ingredient) {
    this.ingArray.push(iG);
  }

  addInst(instruction: string) {
    this.ingInst.push(instruction);
  }

  constructor(rName: string, ingArray: Array<Ingredient>, ingInst: Array<string>, recTime: number) {
    this.rName = rName;
    this.ingArray = ingArray;
    this.ingInst = ingInst;
    this.recTime = recTime;
  }
}
