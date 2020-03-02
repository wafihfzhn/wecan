import React from "react";
import Container from "../templates/Container";
import sumNumbers from "../../utils/sumNumbers";
import "./Home.scss";

const Sum = () => {
  const [result, setResult] = React.useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const currentTarget = event.currentTarget;
    const xVal: number = +currentTarget["X"].value || 0;
    const yVal: number = +currentTarget["Y"].value || 0;
    event.preventDefault();
    setResult(sumNumbers(xVal, yVal));
  };

  React.useEffect(() => {
    setResult(0);
  }, []);

  const SumForm = () => {
    return (
      <form className="sumform" onSubmit={handleSubmit}>
        <input type="number" name="X" placeholder="X value" autoFocus />
        <input type="number" name="Y" placeholder="Y value" />
        <button type="submit">Calculate</button>
      </form>
    );
  };

  return (
    <Container
      name="Sum"
      title="Sum X and Y"
      description="In this page, you will Sum X & Y, and print the result"
    >
      <SumForm />

      <div className="Result">
        <h3>Result:</h3>
        <span>{" " + result}</span>
      </div>
    </Container>
  );
};

export default Sum;
