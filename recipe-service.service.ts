import { Injectable } from '@angular/core';
import { Ingredient } from './Components/IngredientComp/Ingredient.class';
import { Fridge } from './Components/FridgeComp/Fridge.class';
import { ListBox } from './Components/FridgeComp/ListBox.class';
import { Recipe } from './Components/RecipeComp/Recipe.class';
import { RecipeComponent } from './Components/RecipeAppComp/recipeapp.component';

@Injectable()
export class RecipeServiceService {

  theLB: ListBox;
  fridgeCont: Array<Ingredient>;
  theFridge: Fridge = new Fridge(this.fridgeCont, this.theLB.getShoplist(), this.theLB.getConflist());

  theIG: Ingredient;
  recInst: string;
  theRecipe: Recipe;

  num: number;
  name: string;

  addIngToRec(theIG: Ingredient) {
    this.theRecipe.addItem(theIG);
  }

  addInstruction(recInst: string) {
    this.theRecipe.addInst(recInst);
  }

  getRecipeInstructions(theRecipe: Recipe) {
    return this.theRecipe.ingInst;
  }

  getRecipeIngredients(theRecipe: Recipe) {
    return this.theRecipe.ingArray;
  }

  getRecipeTime(theRecipe: Recipe) {
    return this.theRecipe.recTime;
  }

  getIngredientQuantity(theIG: Ingredient) {
    return this.theIG.iQuan;
  }

  getFridgeShoplist(theFridge: Fridge) {
    return this.theLB.getShoplist();
  }

  getFridgeConflist(theFridge: Fridge) {
    return this.theLB.getConflist();
  }

  addToFridge(theIG: Ingredient) {
    this.theFridge.add(theIG);
  }

  removeFromFridge(name: string, num: number) {
    this.theFridge.remove(name, num);
  }

  checkThisFridgeRecipe(theRecipe: Recipe) {
    this.theFridge.checkRecipe(this.theRecipe);
  }

  constructor() {
    this.theFridge = this.theFridge;
    this.theRecipe = this.theRecipe;
  }
}
