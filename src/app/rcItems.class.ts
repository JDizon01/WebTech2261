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


    constructor() {
        this.theFridge = new Fridge(this.fridgeCont, this.theLB.getConflist(), this.theLB.getShoplist());
    }

    clone() {
        return(this.theFridge);
    }
}

export class RecipeItem {
    name: string;
    ingArray: Array<Ingredient>;
    recInstArray: Array<string>;
    time: number;

    constructor(public recName: string = '') { }

    clone() {
        return new Recipe(this.name, this.ingArray, this.recInstArray, this.time);
    }
}

export class ShopList {
    theLB: ListBox;
    shopArray: Array<Ingredient>;
    confArray: Array<Ingredient>;

    constructor() {
    }
    clone() {
        return new ListBox(this.shopArray, this.confArray);
    }
}

