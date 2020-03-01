import React from "react";
import "./Home.scss";

const Home = () => (
  <div className="Home">
    <h1>Pick Your game</h1>
    <a href="./sum">SUM</a>
    <a href="./multiply">Multuply</a>
    <a href="./prime">Prime Sequence</a>
    <a href="./fibonacci">Fibonacci Sequence</a>
  </div>
);

export default Home;
