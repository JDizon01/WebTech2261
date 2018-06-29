import { Ingredient } from './Ingredient.class';

describe('Ingredient Suite', function () {

  beforeEach(function () {
  });

  it('Ingredient_Test', function () {
    const ing1 = new Ingredient('Carrot', 1);
    expect(ing1.iName).toBe('Carrot');
    expect(ing1.iQuan).toBe(1);
  });

  it('Add_Test', function () {
    const ing2 = new Ingredient('Pork', 2);
    ing2.add();
    expect(ing2.iQuan).toBe(4);
  });

  it('Subtract_Test', function () {
    const ing3 = new Ingredient('Beef', 4);
    ing3.subtract();
    expect(ing3.iQuan).toBe(2);
  });

});
