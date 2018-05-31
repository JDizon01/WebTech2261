import { Ingredient } from './Ingredient.class';
import { Recipe } from './Recipe.class'; // used for checkRecipe
import { ListBox } from './ListBox.class';

export class Fridge {

  recI: Array<Ingredient> = [];
  recS: Array<string> = [];
  recT: number;
  recN: string;

  Rp = new Recipe(this.recN, this.recI, this.recS, this.recT);

  sList: Array<Ingredient> = [];
  cList: Array<Ingredient> = [];
  lB = new ListBox(this.sList, this.cList);

  shop: Ingredient[] = [];
  conf: Ingredient[] = [];

  fContents: Array<Ingredient> = []; // Array for Ingredients in fridge

  name: string; // add or remove this Ingredient with THIS name
  quan: number; // used to modify amount taken/removed

  iG = new Ingredient(this.name, this.quan);

  constructor(fContents: Array<Ingredient>, conf: Array<Ingredient>, shop: Array<Ingredient>) {
    this.fContents = fContents;
    this.conf = conf;
    this.shop = shop;
  }

  add(iG: Ingredient) {
    for (const i of this.fContents) {
      if (i.iName.toUpperCase( ) === iG.iName.toUpperCase( )) {
        i.iQuan += iG.iQuan; // Just add on to the quantity of that Ingredient
        this.fContents.pop();  // take out that Ingredient if there is a dupe
      }
    }

    return this.fContents.push(iG); // If it is not there then push it
  }

  remove(name: string, quan: number) {
    for (const i of this.fContents) {
      if (name.toUpperCase( ) === i.iName.toUpperCase( )) { // Check if the name will match any of the content in fridge
      i.iQuan -= quan; // subtract that amount
        if (i.iQuan < 0) { // If the quantity of that Ingredient is less that 0
        this.fContents.pop(); // Take out that Ingredient?
        }
      }
    }
  }

  checkRecipe(Rp: Recipe) {
  let shopDiff: number; // Variable to calculate the difference
  this.lB = new ListBox(this.shop, this.conf);

    for (const r of this.Rp.ingArray) {     // Loop through Ingredients in recipe
      for (const i of this.fContents) { // Loop through Ingredients in fridge

        if (r.iName.toUpperCase() === i.iName.toUpperCase()) {   // If there is a name match between recipe and fridge contents

          if (i.iQuan >= r.iQuan) { // If more iG in fridge than recipe?

            return this.lB.getConflist().push(new Ingredient(r.iName, r.iQuan)); // just push the recipe item into the confirmed items

          } else if (r.iQuan > i.iQuan) { // if the quantity in recipe is more than what is in the fridge

            shopDiff = r.iQuan - i.iQuan; // get the difference for shopList

            this.lB.getShoplist().push(new Ingredient(r.iName, shopDiff)); // Put it in the shopping list
            this.lB.getConflist().push(new Ingredient(r.iName, i.iQuan)); // Push it into confirmed items
            return this.lB; // return the listBox object that contains both lists.
          }
        } else { // Also the fact that the Ingredient in the fridge may not be there at all

          return this.lB.getShoplist().push(new Ingredient(r.iName, r.iQuan));

        }
      }
    }
    return this.lB;
  }
}
