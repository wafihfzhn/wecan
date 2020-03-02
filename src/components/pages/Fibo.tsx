import React from "react";
import Container from "../templates/Container";
import fibonacci from "../../utils/fibonacci";
import "./Home.scss";

const Prime = () => {
  const [result, setResult] = React.useState<number[]>([0]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const currentTarget = event.currentTarget;
    const nVal: number = +currentTarget["primeFactor"].value || 0;

    setResult(fibonacci(nVal));
  };

  React.useEffect(() => {
    setResult([0]);
  }, []);

  const SumForm = () => {
    return (
      <div>
        <form className="sumform" onSubmit={handleSubmit}>
          <input
            type="number"
            name="primeFactor"
            placeholder="First N prime number"
            autoFocus
          />
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  };

  return (
    <Container
      name="Fibonacci"
      title="Fibonacci Number"
      description="In this page, You will find the first N Fibonacci sequence, and print the result"
      withBack
    >
      <SumForm />

      <div className="Result">
        <h3>Result:</h3>
        <span>
          {result.map((r: number, i: number) => (
            <div className="result" key={i} style={{ display: "inline" }}>
              {i ? ", " : ""}
              {r}
            </div>
          ))}
        </span>
      </div>
    </Container>
  );
};

export default Prime;
