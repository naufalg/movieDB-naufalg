import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Movie from "./pages/Movie";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search/:search/:page?">
          <Search />
        </Route>
        <Route path="/movie/:id">
          <Movie />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
