import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ExplorePage from "./components/ExplorePage";
import DrinkPage from "./components/DrinkPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/explore" exact={true} component={ExplorePage} />
        <Route path="/explore/:name" exact={true} component={DrinkPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
