import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar>
    </NavBar>
      <Switch>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
