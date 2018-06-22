import { Component, OnInit } from '@angular/core';
import { Recipe } from '../RecipeComp/Recipe.class'; // Import Recipe Componentimport { Component, OnInit } from '@angular/core';
import { Ingredient } from '../IngredientComp/Ingredient.class';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recapp',
  templateUrl: './recipeapp.component.html',
  styleUrls: ['./recipeapp.component.css']
})

export class RecipeComponent implements OnInit {

    rName: string;
    ingArray: Array<Ingredient> = [];
    ingInst: Array<string> = [];
    recTime: number;

    thisRecipe = new Recipe(this.rName, this.ingArray, this.ingInst, this.recTime);

    // Example 2 stuff
    recipe: Array<Recipe> = new Array();

    // Example 3
    selectedItem: RecipeData = null;

    recipe3: Array<RecipeData> = new Array();

    constructor() { }

    ngOnInit() {
    }
    // Example using two-way binding
    addRecipe() {
      this.recipe.push(this.thisRecipe);
      this.thisRecipe = new Recipe('', [], [], 0);
    }

    removeRecipe(row: number) {
      this.recipe.splice(row, 1);
    }

    // Example of selecting an item
    select(recipe: any) {
      console.log(recipe);
      this.thisRecipe = recipe;
    }

    addIng() {
      this.thisRecipe.addItem(new Ingredient('', 0));
      this.thisRecipe.addInst('');
    }

    delIng(row: number) {
      this.thisRecipe.ingArray.splice(row, 1);
    }

  }
class RecipeData {
  public name: string;
  public recTime: number;
  constructor (recipeObj: Recipe) {
    this.name = recipeObj.name;
    this.recTime = recipeObj.recTime;
  }
}

