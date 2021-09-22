import './App.css';
import Home from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/search">
                        <SearchPage />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    {/* SearchPage (The results page) */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
