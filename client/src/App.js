import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Recipes from "./components/Recipes/Recipes";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import CreateRecipe from "./components/CRUD/CreateRecipe/CreateRecipe";
import UpdateRecipe from "./components/CRUD/UpdateRecipe/UpdateRecipe";
import CrudHome from "./components/CRUD/CrudHome/CrudHome";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/recipes' component={Recipes} />
                    <Route exact path='/recipes/:id' component={RecipeDetail} />
                    <Route exact path='/crud/create_recipe' component={CreateRecipe} />
                    <Route exact path='/crud/update_recipe/:id' component={UpdateRecipe} />
                    <Route exact path='/crud/' component={CrudHome} />
                </Switch>
            </div>
        </Router>
    );
}