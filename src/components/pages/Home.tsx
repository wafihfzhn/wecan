import React from "react";
import Container from "../templates/Container";
import "./Home.scss";

const Home = () => (
  <Container
    name="Home"
    title="Welcome to Wecan Playground"
    description="You can pick any playground you want!"
  >
    <div className="Home">
      <a href="./sum">SUM</a>
      <a href="./multiply">Multuply</a>
      <a href="./prime">Prime Sequence</a>
      <a href="./fibonacci">Fibonacci Sequence</a>
    </div>
  </Container>
);

export default Home;
