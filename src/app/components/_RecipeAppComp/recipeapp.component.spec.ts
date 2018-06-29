import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RecipeComponent } from './recipeapp.component';
import { FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipeComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));
  it('Should Create an App', async(() => {
    const fixture = TestBed.createComponent(RecipeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

describe('RecipeApp Function Tests', function () {
  // const inputs = elem.querySelectorAll('input.text');
  // expect(inputs.length).toBe(1);
  let reC: RecipeComponent;
  beforeEach(() => {
    reC = new RecipeComponent();
  });
  it('Test Add Recipe', () => {
    reC.addRecipe();
    expect(reC.recipe.length).toBe(1);
    expect(reC.thisRecipe.recipeName).toBe('');
  });
  it('Test Remove Recipe', () => {
    reC.removeRecipe(1);
    expect(reC.recipe.length).toBe(0);
  });
  it('Test Add Multiple Recipe', () => {
    reC.addRecipe();
    reC.addRecipe();
    reC.addRecipe();
    expect(reC.recipe.length).toBe(3);
  });
});
