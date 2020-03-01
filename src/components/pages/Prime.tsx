import React from "react";
import primeFactors from "../../utils/primeFactors";
import "./Home.scss";

const Prime = () => {
  const [result, setResult] = React.useState<number[]>([0]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const currentTarget = event.currentTarget;
    const nVal: number = +currentTarget["primeFactor"].value || 0;
    setResult(primeFactors(nVal));
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
    <div className="Sum">
      <h1>Find first N numba</h1>
      <p>
        {" "}
        In this page, you will find first N prime number, and print the result
      </p>
      <SumForm />
      Result:{" "}
      {result.map((r: number, i: number) => (
        <div className="result" key={i} style={{ display: "inline" }}>
          {i ? ", " : ""}
          {r}
        </div>
      ))}
    </div>
  );
};

export default Prime;
