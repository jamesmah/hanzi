import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import PageNotFound from "../../pages/PageNotFound";
import Radicals from "../../pages/Radicals";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/radicals" exact component={Radicals} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default App;
