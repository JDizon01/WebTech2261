import { Ingredient } from '../IngredientComp/Ingredient.class';

export class Recipe {
  recipeName: string;
  ingredientArray: Array<Ingredient> = [];
  instructionArray: Array<string> = [];
  recipeTime: number; 

  addRecipeIngredient(iG: Ingredient) {
    this.ingredientArray.push(iG);
  }

  addInstruction(instruction: string) {
    this.instructionArray.push(instruction);
  }

  constructor(rName: string, ingArray: Array<Ingredient>, ingInst: Array<string>, recTime: number) {
    this.recipeName = rName;
    this.ingredientArray = ingArray;
    this.instructionArray = ingInst;
    this.recipeTime = recTime;
  }
}
