import React from "react";
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
    <div className="Sum">
      <h1>Multiply X & Y</h1>
      <p> In this page, you will Multiply X & Y, and print the result</p>
      <SumForm />
      Result: {result}
    </div>
  );
};

export default Multiply;
