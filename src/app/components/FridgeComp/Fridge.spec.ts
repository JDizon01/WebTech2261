import { Ingredient } from '../IngredientComp/Ingredient.class';
import { Recipe } from '../RecipeComp/Recipe.class';
import { Fridge } from './Fridge.class';

describe('Fridge Suite', function () {

    it('Fridge_Init_Test', function () {
        const fConts: Array<Ingredient> = [];
        const aList: Array<Ingredient[]> = [];
        const fridge1 = new Fridge('Fridge1', fConts, aList);
        expect(fridge1.fridgeName).toBe('Fridge1');
    });

    it('Add_Fridge_Test', function () {
        const fConts: Array<Ingredient> = [];
        const aList: Array<Ingredient[]> = [];
        const fridge2 = new Fridge('Fridge2', fConts, aList);
        expect(fridge2.fridgeName).toBe('Fridge2');

        expect(fridge2.fridgeContents.length).toBe(0);
        fridge2.addToFridge(new Ingredient('Pork', 1));
        expect(fridge2.fridgeContents.length).toBe(1);
        expect(fridge2.fridgeContents[0].iQuan).toBe(1);

        fridge2.addToFridge(new Ingredient('PoRk', 4));
        expect(fridge2.fridgeContents.length).toBe(1);
        expect(fridge2.fridgeContents[0].iQuan).toBe(5);

        fridge2.addToFridge(new Ingredient('POrk', 6));
        expect(fridge2.fridgeContents[0].iQuan).toBe(11);

        expect(fridge2.fridgeContents[0].iName).toBe('Pork');
    });

    it('Remove_Fridge_Test', function () {
        const fConts: Array<Ingredient> = [];
        const aList: Array<Ingredient[]> = [];
        const fridge3 = new Fridge('Fridge3', fConts, aList);
        expect(fridge3.fridgeName).toBe('Fridge3');

        fridge3.addToFridge(new Ingredient('Pork', 6));

        expect(fridge3.fridgeContents.length).toBe(1);
        expect(fridge3.fridgeContents[0].iQuan).toBe(6);
        expect(fridge3.fridgeContents[0].iName).toBe('Pork');

        fridge3.removeFromFridge('Pork', 2);
        expect(fridge3.fridgeContents[0].iQuan).toBe(4);

        fridge3.removeFromFridge('Pork', 5);
        expect(fridge3.fridgeContents.length).toBe(0);
    });

    it('Check_Recipe_Greater_Fridge_Contents' , function () {

        // Construct Fridge 4
          const fConts: Array<Ingredient> = [];
          const aList: Array<Ingredient[]> = [];
        const fridge4 = new Fridge('Fridge4', fConts, aList);
        expect(fridge4.fridgeName).toBe('Fridge4');

        // Construct Recipe 1
        const ingArray: Array<Ingredient>  = [];
        const instructions: Array<string> = [];
        const recipe1 = new Recipe('Beef and Potatoes', ingArray, instructions, 60);
        expect(recipe1.recipeName).toBe('Beef and Potatoes');

        // Set Up Ingredient Arrays
        recipe1.addRecipeIngredient(new Ingredient('Beef', 7));
        recipe1.addRecipeIngredient(new Ingredient('Potato', 10));
        fridge4.addToFridge(new Ingredient('Beef', 5));
        fridge4.addToFridge(new Ingredient('Potato', 8));

        // Fridge has less Ingredients than Recipe so we should get 2 Lists

        fridge4.checkRecipe(recipe1);

        expect(fridge4.allLists.length).toBe(2);
        expect(fridge4.shoppingList.length).toBe(2);

        // Beef in Shopping List is 2
        expect(fridge4.shoppingList[0].iName).toBe('Beef');
        expect(fridge4.shoppingList[0].iQuan).toBe(2);
        expect(fridge4.shoppingList[1].iName).toBe('Potato');
        expect(fridge4.shoppingList[1].iQuan).toBe(2);
        // Beef in Confirmed List is 5
        expect(fridge4.confirmedList[0].iName).toBe('Beef');
        expect(fridge4.confirmedList[0].iQuan).toBe(5);
        expect(fridge4.confirmedList[1].iName).toBe('Potato');
        expect(fridge4.confirmedList[1].iQuan).toBe(8);
    });

});
