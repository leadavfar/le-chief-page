import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Recipes from "./components/Recipes/Recipes";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/recipes' component={Recipes} />
                    <Route exact path='/recipes/:id' component={RecipeDetail} />
                </Switch>
            </div>
        </Router>
    );
}