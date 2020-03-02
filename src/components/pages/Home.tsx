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
      <a href="./sum">SUM X and Y</a>
      <a href="./multiply">Multiply X and Y</a>
      <a href="./prime">Prime Sequence</a>
      <a href="./fibonacci">Fibonacci Sequence</a>
    </div>
  </Container>
);

export default Home;
