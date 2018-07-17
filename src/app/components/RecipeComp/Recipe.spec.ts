import { Recipe } from './Recipe.class';
import { Ingredient } from '../IngredientComp/Ingredient.class';

describe('Recipe Suite', function () {

    beforeEach(function () {
    });

    it('Recipe_Add_Ing_Test', function () {
        const ing1 = new Ingredient('Beef', 1);
        const ing2 = new Ingredient('Apple', 5);
        const ingArray: Array<Ingredient> = [];
        const recInst: Array<string> = [];

        const rec1 = new Recipe('Beef and Apples', ingArray, recInst, 60);
        expect(rec1.recipeName).toBe('Beef and Apples');

        ing1.add('Beef');
        rec1.addRecipeIngredient(ing1);

        expect(ingArray[0].iName).toBe('Beef');
        expect(ingArray[0].iQuan).toBe(3);

        rec1.addRecipeIngredient(ing2);

        expect(ingArray[1].iName).toBe('Apple');
        expect(ingArray[1].iQuan).toBe(5);
    });

    it('Recipe_Add_Inst_Test', function () {
        const ing1 = new Ingredient('Beef', 1);
        const ing2 = new Ingredient('Apple', 5);
        const ingArray: Array<Ingredient> = [];
        const recInst: Array<string> = [];

        const rec2 = new Recipe('Beef and Apples 2', ingArray, recInst, 60);
        expect(rec2.recipeName).toBe('Beef and Apples 2');

        rec2.addInstruction('Mix well');
        rec2.addInstruction('Shake off dust');
        rec2.addInstruction('Blowdry your hair');

        expect(rec2.instructions[0]).toBe('Mix well');
        expect(rec2.instructions[1]).toBe('Shake off dust');
        expect(rec2.instructions[2]).toBe('Blowdry your hair');
    });

    it('Recipe_Time_Test' , function () {
        const ingArray: Array<Ingredient> = [];
        const recInst: Array<string> = [];
        const rec3 = new Recipe('Beef and Apples 2', ingArray, recInst, 60);

        expect(rec3.estTime).toBe(60);
    });

  });
