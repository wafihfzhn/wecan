import React from "react";
import { Redirect, Router } from "@reach/router";
import Route from "./components/Route";
import Home from "./components/pages/Home";
import Sum from "./components/pages/Sum";
import Multiply from "./components/pages/Multiply";
import Prime from "./components/pages/Prime";
import Fibonacci from "./components/pages/Fibo";
import Wecan from "./assets/wecan.png";
import "./App.scss";

const App = () => (
  <div className="App">
    <h1>
      <img alt="wecan" src={Wecan} />
      WECAN
    </h1>
    <Router>
      <Route path="/" pageComponent={<Home />} />
      <Route path="/wecan" pageComponent={<Home />} />
      <Route path="/wecan/sum" pageComponent={<Sum />} />
      <Route path="/wecan/multiply" pageComponent={<Multiply />} />
      <Route path="/wecan/prime" pageComponent={<Prime />} />
      <Route path="/wecan/fibonacci" pageComponent={<Fibonacci />} />
    </Router>
  </div>
);

export default App;
