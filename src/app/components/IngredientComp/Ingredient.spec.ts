import { Ingredient } from './Ingredient.class';

describe('Ingredient Suite', function () {

  beforeEach(function () {
  });

  it('Ingredient_Construct_Test', function () {
    const ing1 = new Ingredient('Carrot', 1);
    expect(ing1.iName).toBe('Carrot');
    expect(ing1.iQuan).toBe(1);
  });

  it('Ingredient_Add_Test', function() {
    const ing2 = new Ingredient('Beef', 0);
    ing2.add('Beef');
    expect(ing2.iName).toBe('Beef');
    expect(ing2.iQuan).toBe(2);
  });

  it('Ingredient_Subtract_Test', function() {
    const ing3 = new Ingredient('Banana', 5);
    ing3.subtract('Banana');
    expect(ing3.iName).toBe('Banana');
    expect(ing3.iQuan).toBe(3);
  });
});
