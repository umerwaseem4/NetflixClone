import React from "react";
import "./main.scss";
import Home from "./Components/Home";
import MainHome from "./Components/MainHome";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/homescreen" component={MainHome} />
      </Switch>
    </div>
  );
};

export default App;
