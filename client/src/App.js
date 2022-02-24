import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </Router>
    );
}