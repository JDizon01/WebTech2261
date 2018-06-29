import { Ingredient } from './Components/IngredientComp/Ingredient.class';
import { Fridge } from './Components/FridgeComp/Fridge.class';
import { ListBox } from './Components/FridgeComp/ListBox.class';
import { Recipe } from './Components/RecipeComp/Recipe.class';
import { RecipeComponent } from './Components/RecipeAppComp/recipeapp.component';


export class FridgeItem {
    thisComp: RecipeComponent;
    theLB: ListBox;
    fridgeCont: Array<Ingredient>;
    theFridge: Fridge;

    constructor() { }
}

export class RecipeItem {
    name: string;
    ingArray: Array<Ingredient>;
    recInstArray: Array<string>;
    time: number;

    constructor() { }
}

export class ShopList {
    theLB: ListBox;
    shopArray: Array<Ingredient>;
    confArray: Array<Ingredient>;

    constructor() {
    }
}

