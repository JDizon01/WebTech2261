import { Recipe } from './Recipe.class';
import { Ingredient } from '../IngredientComp/Ingredient.class';

describe('Recipe Suite', function () {
  beforeEach(function () {
  });

  it('Recipe_Add_Ing_Test', function () {
    const ingArray = [];
    const ingInst = [];
    const rec1 = new Recipe('Beef Steak', ingArray, ingInst, 60);

    expect(rec1.recipeName).toBe('Beef Steak');
    expect(rec1.recipeTime).toBe(60);
    
    rec1.addRecipeIngredient(new Ingredient('Beef', 1));
    rec1.addInstruction('Mix');

    expect(rec1.ingredientArray[0].iName).toBe('Beef');
    expect(rec1.ingredientArray[0].iQuan).toBe(1);
    expect(rec1.instructionArray[0]).toBe('Mix');

    rec1.ingredientArray[0].add();

    expect(rec1.ingredientArray[0].iQuan).toBe(3);
  });

});
