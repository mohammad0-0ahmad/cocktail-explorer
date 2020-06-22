import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/explore" exact={true}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
