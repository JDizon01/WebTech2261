import { Ingredient } from '../IngredientComp/Ingredient.class';
import { Recipe } from '../RecipeComp/Recipe.class';
import { Fridge } from './Fridge.class';
import { ListBox } from './ListBox.class';

describe('Fridge Suite', function () {

it('Add_Fridge_Test', function () {
  const fContents = [];
  const sList: Array<Ingredient> = [];
  const cList: Array<Ingredient> = [] ;
  const lB = new ListBox(sList, cList);

  const theFridge = new Fridge(fContents, cList, sList);

  theFridge.add(new Ingredient('Bread', 5));

  expect(theFridge.fContents.length).toBe(1);
  expect(theFridge.fContents[0].iName).toBe('Bread');
  expect(theFridge.fContents[0].iQuan).toBe(5);

  theFridge.add(new Ingredient('Apple', 3));
  expect(theFridge.fContents.length).toBe(2);
  expect(theFridge.fContents[1].iName).toBe('Apple');
  expect(theFridge.fContents[1].iQuan).toBe(3);
  });

it('Remove_Fridge_Test', function () {
  const fContents = [];
  const sList: Array<Ingredient> = [];
  const cList: Array<Ingredient> = [];
  const lB = new ListBox(sList, cList);

  const theFridge = new Fridge(fContents, cList, sList);

  theFridge.add(new Ingredient('Bread', 5));
  theFridge.add(new Ingredient('Apple', 3));
  theFridge.add(new Ingredient('Raisins', 7));
  expect(theFridge.fContents.length).toBe(3);

  theFridge.remove('Bread', 3); // Expect Bread to be 2
  theFridge.remove('Raisins', 8); // Expect Raisins to be gone

  expect(theFridge.fContents.length).toBe(2);
  expect(theFridge.fContents[0].iName).toBe('Bread');
  expect(theFridge.fContents[0].iQuan).toBe(2);
  expect(theFridge.fContents[1].iName).toBe('Apple');
  expect(theFridge.fContents[1].iQuan).toBe(3);
});

it('Check_Recipe_Greater_Fridge_Contents' , function () {
  const fContents = [];
  const sList: Ingredient[] = [];
  const cList: Ingredient[] = [];
  const lB = new ListBox(sList, cList);

  const theFridge = new Fridge(fContents, cList, sList);

  const ingArray1: Array<Ingredient> = [];
  const instArray1: Array<string> = [];
  const recTimer = 120;
  const rName = '';
  const theRecipe = new Recipe(rName, ingArray1, instArray1, recTimer);

  theFridge.add(new Ingredient('Bread', 5));
  theFridge.add(new Ingredient('Apple', 3));
  theRecipe.addItem(new Ingredient('Bread', 3));
  theRecipe.addItem(new Ingredient('Apple', 1));

  theFridge.checkRecipe(theRecipe);
});

});
