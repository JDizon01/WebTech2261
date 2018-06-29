import { Ingredient } from '../IngredientComp/Ingredient.class';
import { Recipe } from '../RecipeComp/Recipe.class';
import { Fridge } from './Fridge.class';

describe('Fridge Suite', function () {

it('Add_Fridge_Test', function () {
  const fCont1: Array<Ingredient> = [];
  const sList: Array<Ingredient> = [];
  const cList: Array<Ingredient> = [];
  const aList1: Array<Ingredient[]> = [];
  const Fridge1 = new Fridge(fCont1, cList, sList, aList1);

  Fridge1.add(new Ingredient('Beef', 1));

  expect(Fridge1.fridgeContents[0].iName).toBe('Beef');
  expect(Fridge1.fridgeContents[0].iQuan).toBe(1);
  Fridge1.fridgeContents[0].add();
  expect(Fridge1.fridgeContents[0].iQuan).toBe(3);
});

it('Remove_Fridge_Test', function () {
  const fCont2: Array<Ingredient> = [];
  const sList: Array<Ingredient> = [];
  const cList: Array<Ingredient> = [];
  const aList2: Array<Ingredient[]> = [];
  const Fridge2 = new Fridge(fCont2, cList, sList, aList2);
  Fridge2.add(new Ingredient('Beef', 1));
  expect(Fridge2.fridgeContents[0].iName).toBe('Beef');
  expect(Fridge2.fridgeContents[0].iQuan).toBe(1);
  Fridge2.fridgeContents[0].add();
  expect(Fridge2.fridgeContents[0].iQuan).toBe(3);
  Fridge2.remove('Beef', 1);
  expect(Fridge2.fridgeContents[0].iQuan).toBe(2);
  Fridge2.remove('Beef', 3);
  expect(Fridge2.fridgeContents.length).toBe(0);
});

it('Check_Recipe_Test' , function () {
  const fCont3: Array<Ingredient> = [];
  const sList: Array<Ingredient> = [];
  const cList: Array<Ingredient> = [];
  const aList3: Array<Ingredient[]> = [sList, cList];
  const Fridge3 = new Fridge(fCont3, cList, sList, aList3);

  const ingArray: Array<Ingredient> = [];
  const instArray: Array<string> = ['mix'];
  const rec1: Recipe = new Recipe('Beef Stew', ingArray, instArray, 60);

  Fridge3.add(new Ingredient('Beef', 4));
  Fridge3.add(new Ingredient('Carrots', 3));
  Fridge3.add(new Ingredient('Potato', 4));

  rec1.addRecipeIngredient(new Ingredient('Beef', 6));
  rec1.addRecipeIngredient(new Ingredient('Carrots', 8));
  rec1.addRecipeIngredient(new Ingredient('Potato', 4));
  rec1.addRecipeIngredient(new Ingredient('Onion', 1));

  Fridge3.checkRecipe(rec1);

  expect(Fridge3.shoppingList.length).toBe(11);
  expect(Fridge3.confirmedList.length).toBe(3);





  
});

});
