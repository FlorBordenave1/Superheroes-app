import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Favorites from "./Pages/Favorites/Favorites"
import Menu from "./Pages/Dashboard/Menu"
import SuperheroState from "./context/SuperheroState";

function App() {
  return (
    <Router>
      <Switch>
        <SuperheroState>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/" exact>
            <Menu />
          </Route>
        </SuperheroState>
      </Switch>
    </Router>
  );
}

export default App;
