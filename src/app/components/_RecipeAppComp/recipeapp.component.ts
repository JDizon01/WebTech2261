import { Component, OnInit } from '@angular/core';
import { Recipe } from '../RecipeComp/Recipe.class'; // Import Recipe Componentimport { Component, OnInit } from '@angular/core';
import { Ingredient } from '../IngredientComp/Ingredient.class';
import { RecipeService } from '../../recipe.service';

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

    recipe: Array<Recipe> = new Array();

    selectedItem: RecipeData = null;

    recipe3: Array<RecipeData> = new Array();

    constructor(private recService: RecipeService) {
    }

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
      this.thisRecipe.addRecipeIngredient(new Ingredient('', 0));
      this.thisRecipe.addInstruction('');
    }

    delIng(row: number) {
      this.thisRecipe.ingredientArray.splice(row, 1);
    }

  }
class RecipeData {
  public name: string;
  public recTime: number;
  constructor (recipeObject: Recipe) {
    this.name = recipeObject.recipeName;
    this.recTime = recipeObject.estTime;
  }
}

