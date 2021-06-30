import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/Home/Home";
import Likes from "./Components/Home/Likes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/favoritos">
          <Likes />
        </Route>
        <Route path="/" exact>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
