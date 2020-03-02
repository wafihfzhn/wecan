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
      <a href="./wecan/sum">SUM X and Y</a>
      <a href="./wecan/multiply">Multiply X and Y</a>
      <a href="./wecan/prime">Prime Sequence</a>
      <a href="./wecan/fibonacci">Fibonacci Sequence</a>
    </div>
  </Container>
);

export default Home;
