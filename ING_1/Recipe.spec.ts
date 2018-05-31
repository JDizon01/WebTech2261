import { Recipe } from './Recipe.class';
import { Ingredient } from './Ingredient.class';

describe('Recipe Suite', function () {

  // Ingredient variables
  const name = '';
  const qt = 0;

  const testIng = new Ingredient(name, qt);
  const testIng2 = new Ingredient(name, qt);

  // Recipe variables
  const ingArray1: Array<Ingredient> = [];
  const instArray1: Array<string> = [];
  const recTimer = 120;
  const rName = '';

  const testRec = new Recipe(rName, ingArray1, instArray1, recTimer);

  beforeEach(function () {

  });

  // Testing adding ingredients to array
  it('Recipe_Add_Ing_Test', function () {
    testIng.iName = 'carrot';
    testIng.iQuan = 1;
    testRec.addItem(testIng);
    expect(testRec.ingArray[0].iName).toBe('carrot');
    expect(testRec.ingArray[0].iQuan).toBe(1);

    // Add another to check
    testIng2.iName = 'meat';
    testIng2.iQuan = 10;

    testRec.addItem(testIng2);
    expect(testRec.ingArray[1].iName).toBe('meat');
    expect(testRec.ingArray[1].iQuan).toBe(10);
  });

  // Test adding instructions to a recipe
  it('Recipe_Add_Inst_Test', function () {
    const instArray: Array<string> = [];
    testRec.addInst('shake');
    testRec.addInst('mix');
    expect(testRec.ingInst[0]).toBe('shake');
    expect(testRec.ingInst[1]).toBe('mix');
  });

  // Testing time
  it('Recipe_Time_Test' , function () {
    testRec.recTime = recTimer;
    expect(testRec.recTime).toBe(120);
  });

});
