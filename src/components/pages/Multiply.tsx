import React from "react";
import Container from "../templates/Container";
import multiply from "../../utils/multiply";
import "./Home.scss";

const Multiply = () => {
  const [result, setResult] = React.useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const currentTarget = event.currentTarget;
    const xVal: number = +currentTarget["X"].value || 0;
    const yVal: number = +currentTarget["Y"].value || 0;
    event.preventDefault();
    setResult(multiply(xVal, yVal));
  };

  React.useEffect(() => {
    setResult(0);
  }, []);

  const SumForm = () => {
    return (
      <div>
        <form className="sumform" onSubmit={handleSubmit}>
          <input type="number" name="X" placeholder="X value" autoFocus />
          <input type="number" name="Y" placeholder="Y value" />
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  };

  return (
    <Container
      name="Multiply"
      title="Multiply X and Y"
      description="In this page, you will multiply X & Y, and print the result"
      withBack
    >
      <SumForm />

      <div className="Result">
        <h3>Result:</h3>
        <span>{" " + result}</span>
      </div>
    </Container>
  );
};

export default Multiply;
