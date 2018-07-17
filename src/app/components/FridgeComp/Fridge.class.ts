import { Ingredient } from '../IngredientComp/Ingredient.class';
import { Recipe } from '../RecipeComp/Recipe.class';

export class Fridge {

    fridgeContents: Array<Ingredient> = [];
    shoppingList: Array<Ingredient> = [];
    confirmedList: Array<Ingredient> = [];
    allLists: Array<Ingredient[]> = [this.shoppingList, this.confirmedList];

    fridgeName: string;

    constructor(fName: string, fContents: Array<Ingredient>, aList: Array<Ingredient[]>) {
        this.fridgeName = fName;
        this.fridgeContents = fContents;
        this.allLists = this.allLists;
        this.shoppingList = this.shoppingList;
        this.confirmedList = this.confirmedList;
    }

    addToFridge(iG: Ingredient) {
        for (const i of this.fridgeContents) {
            if (i.iName.toUpperCase() === iG.iName.toUpperCase()) {
                const newAmt = i.iQuan += iG.iQuan;
                iG = new Ingredient(i.iName, newAmt);
                this.fridgeContents.pop();
            }
        }
        return this.fridgeContents.push(iG);
    }

    removeFromFridge(Name: string, Amount: number) {
        for (const i of this.fridgeContents) {
            if (i.iName.toUpperCase() === Name.toUpperCase()) {
                i.iQuan -= Amount;
                if (i.iQuan < 0) {
                    this.fridgeContents.pop();
                }
            }
        }
    }

    checkRecipe(rP: Recipe) {
        for (const recIng of rP.ingredientArray) {
            for (const fridgeIng of this.fridgeContents) {
                if (recIng.iName.toUpperCase() === fridgeIng.iName.toUpperCase()) {
                    if (fridgeIng.iQuan >= recIng.iQuan) {
                        this.allLists[1].push(new Ingredient(recIng.iName, recIng.iQuan)); // Push ING to Confirmed List
                    } else if (recIng.iQuan > fridgeIng.iQuan) {
                        const amtDifference: number = recIng.iQuan - fridgeIng.iQuan;
                        this.allLists[0].push(new Ingredient(recIng.iName, amtDifference));
                        this.allLists[1].push(new Ingredient(recIng.iName, fridgeIng.iQuan));
                    } else {
                        this.allLists[0].push(new Ingredient(recIng.iName, recIng.iQuan)); // Push ING to Shop List
                    }
                }
            }
        }
        return this.allLists;
    }
}
