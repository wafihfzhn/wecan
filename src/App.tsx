import React from "react";
import { Router } from "@reach/router";
import Route from "./components/Route";
import Home from "./components/pages/Home";
import Sum from "./components/pages/Sum";
import Multiply from "./components/pages/Multiply";
import Prime from "./components/pages/Prime";
import Fibonacci from "./components/pages/Fibo";
import "./App.scss";

const App = () => (
  <div className="App">
    <Router>
      <Route path="/" pageComponent={<Home />} />
      <Route path="/sum" pageComponent={<Sum />} />
      <Route path="/multiply" pageComponent={<Multiply />} />
      <Route path="/prime" pageComponent={<Prime />} />
      <Route path="/fibonacci" pageComponent={<Fibonacci />} />
    </Router>
  </div>
);

export default App;
