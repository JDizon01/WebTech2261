import { Ingredient } from './components/IngredientComp/Ingredient.class';
import { Recipe } from './components/RecipeComp/Recipe.class';
import { Fridge } from './components/FridgeComp/Fridge.class';
import { Injectable } from '@angular/core';


// They Should All Connect to each other

// Recipe Component, Shopping list getter, fridge component.
@Injectable()
export class RecipeService {

  rName: string;
  ingArray: Array<Ingredient> = [];
  ingInst: Array<string> = [];
  recTime: number;

  myRecipe = new Recipe(this.rName, this.ingArray, this.ingInst, this.recTime);

  fridgeName: string;
  fridgeContents: Array<Ingredient> = [];
  allLists: Array<Ingredient[]> = [];

  myFridge = new Fridge(this.fridgeName, this.fridgeContents, this.allLists);

  recipeArray: Array<Recipe> = new Array();

  constructor() { }

  myData() {
    return 'This is my data man';
  }

  addRecipe() {
    return this.recipeArray.push(this.myRecipe);
  }

  clearRecipe() {
    return this.myRecipe = new Recipe('', [], [], 0);
  }

  removeRecipe(row: number) {
    return this.recipeArray.splice(row, 1);
  }

  getFridgeContents() {
    return this.myFridge.fridgeContents;
  }

  addToFridge(IG: Ingredient) {
    return this.myFridge.addToFridge(IG);
  }

  removeFromFridge(iName: string, amt: number) {
    return this.myFridge.removeFromFridge(iName, amt);
  }

  getShoppingList() {
    return this.myFridge.allLists[0];
  }

  // All these is shared inside the RecipeAppComponent we made.

}
