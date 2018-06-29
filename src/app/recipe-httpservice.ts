import { Injectable } from '@angular/core';
import { Ingredient } from './Components/IngredientComp/Ingredient.class';
import { Fridge } from './Components/FridgeComp/Fridge.class';
import { ListBox } from './Components/FridgeComp/ListBox.class';
import { Recipe } from './Components/RecipeComp/Recipe.class';
import { RecipeComponent } from './Components/RecipeAppComp/recipeapp.component';
import { HttpClient } from '@angular/common/http';
import { HttpRequest } from 'selenium-webdriver/http';

@Injectable()
export class RecipeServiceService {
  thisComp: RecipeComponent;
  theLB: ListBox;
  fridgeCont: Array<Ingredient>;
  theFridge: Fridge;
  theRecipe: Recipe;

  constructor(private http: HttpClient) {
    this.theRecipe = new Recipe(this.theRecipe.rName, this.theRecipe.ingArray, this.theRecipe.ingInst, this.theRecipe.recTime);
    this.theFridge = new Fridge(this.fridgeCont, this.theLB.getShoplist(), this.theLB.getConflist());
    this.thisComp = new RecipeComponent();
  }

  addRecipe(theRecipe: any) {
    this.thisComp.addRecipe();
    this.http.post('http://localhost:4200/addRecipe', this.theRecipe)
    .toPromise().catch((reason) => {
      console.log('Cannot Add Recipe', reason);
    }).then((response: any) => {
      console.log('response', response);
    });
  }

  removeRecipe(num: number) {
    this.thisComp.removeRecipe(num);
  }

  getFridgeIng() {
    return this.theFridge.fContents;
  }

  removeFromfridge(theIG: Ingredient) {
    this.theFridge.remove(theIG.iName, theIG.iQuan);
  }

  addTofridge(theIG: Ingredient) {
    this.theFridge.add(theIG);
  }

  getShoppinglist(theFridge: Fridge) {
    return this.theFridge.sList;
  }
}
