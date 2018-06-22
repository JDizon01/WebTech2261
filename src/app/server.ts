import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { RecipeServiceService } from './recipe-service.service';
import { RecipeComponent } from './Components/RecipeAppComp/recipeapp.component';
import { Recipe } from './Components/RecipeComp/Recipe.class';
const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
const RecipeComp = new RecipeComponent();
const recipeL = RecipeComp.recipe; // Get Recipe List
const recipeItem = '';
app.param('recipe', function(res: any, req: any, next: any, value: any) {
    (<any>req).data = (<any>req).data || {};
    (<any>req).data.store = value;
    next();
});

app.get('/recipeTest', function(res: any) {
    res.send('{"test": this is a recipe test');
});

app.post('/recipeList', function (req: any, res: any) {
    res.header('body', req.body);
    recipeL.push(req.body);
    console.log(recipeL);
    res.send({ Recipe: recipeL} );
});

app.post('/getRecipe', function (req: any, res: any) {
    console.log('body', req.body);

});

app.listen(8000, function () {
    console.log('Server Start');
});
