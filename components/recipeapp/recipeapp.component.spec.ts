import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RecipeComponent } from './recipeapp.component';
import { FormsModule } from '@angular/forms';

describe('Basic RecipeApp Test', () => {
  let reC: RecipeComponent;
  beforeEach(() => {
    reC = new RecipeComponent();
  });
  it('Test Add Recipe', () => {
    reC.addRecipe();
    expect(reC.recipe.length).toBe(1);
    expect(reC.thisRecipe.rName).toBe('');
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

describe('RecipeApp HTML Tests', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;
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
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));
  it('Check if RecipeApp is created', () => {
    expect(component).toBeTruthy();
  });

  it('Testing HTML Elements', () => {
    const elem: HTMLElement = fixture.debugElement.nativeElement;
    const inputs = elem.querySelectorAll('input.text');
    expect(inputs.length).toBe(0);
  });
});
