import { Ingredient } from '../IngredientComp/Ingredient.class';
import { RecipeService } from '../../recipe.service';

export class Recipe {

    recipeName: string;
    ingredientArray: Array<Ingredient> = [];
    instructions: Array<string> = [];
    estTime: number;

    addRecipeIngredient(iG: Ingredient) {
        this.ingredientArray.push(iG);
    }

    addInstruction(instruction: string) {
        this.instructions.push(instruction);
    }

    constructor(rName: string, ingredientArray: Array<Ingredient>, instructions: Array<string>, time: number) {
        this.recipeName = rName;
        this.ingredientArray = ingredientArray;
        this.instructions = instructions;
        this.estTime = time;
    }
}
