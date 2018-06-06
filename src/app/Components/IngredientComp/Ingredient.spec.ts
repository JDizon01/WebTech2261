import { Ingredient } from './Ingredient.class';

describe('Ingredient Suite', function () {

  const name = 'carrot';
  const qt = 1;
  const ing = new Ingredient(name, qt);

  beforeEach(function () {

  });

  it('Ingredient_Test', function () {
    ing.iName = name; // Gotta do something here before you expect something to happen
    ing.iQuan = qt;
    expect(ing.iName).toBe('carrot');
    expect(ing.iQuan).toBe(1);
  });

});
