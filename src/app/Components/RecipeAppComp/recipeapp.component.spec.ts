import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RecipeComponent } from './recipeapp.component';
import { FormsModule } from '@angular/forms';
import { element } from 'protractor';

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

  it('Testing HTML Init', () => {
    const elem: HTMLElement = fixture.debugElement.nativeElement;
    const inputs = elem.querySelectorAll('input');
    const labels = elem.querySelectorAll('label');
    expect(elem.querySelector('h1').textContent).toContain('Create A Recipe');
    expect(labels.length).toBe(2); // Before clicking any buttons
    expect(inputs.length).toBe(4); // Should be 2 buttons and 2 Fields
    expect(labels[0].outerText).toBe('Name: ');
    expect(labels[1].outerText).toBe('Time: ');

  });

  it('Test Click Events', () => {
    const elem: HTMLElement = fixture.debugElement.nativeElement;
    const inputs = elem.querySelectorAll('input');
    const labels = elem.querySelectorAll('label');
    const buttons = elem.querySelectorAll('input[type="button"]');
    const innerLabels = elem.querySelectorAll('div.col-sm-12 > label');

    expect(buttons.length).toBe(2); // Ensure that you have 2 buttons present
    expect(innerLabels.length).toBe(0);


    (<HTMLInputElement>(inputs[0])).value = 'Cake';
    (<HTMLInputElement>(inputs[1])).value = '60';

    buttons[0].dispatchEvent(new Event('click')); // Should click add ingredient
    fixture.detectChanges(); // Causes a ViewDestroyedError?


  });
});
