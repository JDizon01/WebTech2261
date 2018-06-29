import { Ingredient } from '../IngredientComp/Ingredient.class';
import { Recipe } from '../RecipeComp/Recipe.class';

export class Fridge {

  fridgeContents: Array<Ingredient>; 
  shoppingList: Array<Ingredient>;
  confirmedList: Array<Ingredient>;

  allLists: Array<Ingredient[]> = [this.shoppingList, this.confirmedList];

  constructor(fridgeContents: Array<Ingredient>, cList: Array<Ingredient>, sList: Array<Ingredient>, aLists: Array<Ingredient[]>) {
    this.fridgeContents = fridgeContents;
    this.confirmedList = cList;
    this.shoppingList = sList;
    this.allLists = aLists;
  }

  add(iG: Ingredient) {
    for (const ing of this.fridgeContents) {
      if (ing.iName.toUpperCase( ) === iG.iName.toUpperCase( )) {
        ing.iQuan += iG.iQuan; 
        this.fridgeContents.pop();  
      }
    }
    return this.fridgeContents.push(iG); 
  }

  remove(name: string, quan: number) {
    for (const i of this.fridgeContents) {
      if (name.toUpperCase( ) === i.iName.toUpperCase( )) { 
      i.iQuan -= quan;
        if (i.iQuan < 0) { 
        this.fridgeContents.pop(); 
        }
      }
    }
  }

  checkRecipe(myRecipe: Recipe) {
    for (const rIng of myRecipe.ingredientArray) {  
      for (const fIng of this.fridgeContents) { 
        if (rIng.iName.toUpperCase() === fIng.iName.toUpperCase()) {  
          if (fIng.iQuan >= rIng.iQuan) { 
            this.allLists[1].push(rIng);
          } else if (rIng.iQuan > fIng.iQuan) { 
            const shopDiff = rIng.iQuan - fIng.iQuan; 
            this.allLists[0].push(new Ingredient(rIng.iName, shopDiff)); 
            this.allLists[1].push(new Ingredient(rIng.iName, fIng.iQuan)); 
          }
        } else { 
          this.allLists[0].push(rIng);
        }
      }
    }
    return this.allLists;
  }
}
