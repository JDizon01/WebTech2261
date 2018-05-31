import { Ingredient } from './Ingredient.class';

describe("Ingredient Suite", function () {

  let name = "carrot";
  let qt = 1;
  let ing = new Ingredient(name, qt);

  beforeEach(function () {

  });

  it("Ingredient_Test", function () {
    ing.iName = name; //Gotta do something here before you expect something to happen
    ing.iQuan = qt;
    expect(ing.iName).toBe("carrot");
    expect(ing.iQuan).toBe(1);
  });

})
