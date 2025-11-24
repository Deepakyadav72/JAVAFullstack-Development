import React from "react";
// import "./APP.css";
import { Api_calling } from "./Components/Api_calling.jsx";

export const App = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(10);

  // Runs on every render
  React.useEffect(() => {
    console.log("Always runs (no dependency) -> count:", count);
  });

  // Runs only once on first render
  React.useEffect(() => {
    console.log("Runs only once on mount (empty dependency [])");
  }, []);

  // Runs when count2 changes
  React.useEffect(() => {
    console.log("Runs when count2 changes -> count2:", count2);
  }, [count2]);

  return (
    <>
      <h1>count_1: {count}</h1>
      <h1>count_2: {count2}</h1>

      <button onClick={() => setCount((prev) => prev - 1)}> - </button>
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>

      <button onClick={() => setCount2((prev) => prev - 1)}>
        count2 decrement
      </button>
      <button onClick={() => setCount2((prev) => prev + 1)}>
        count2 increment
      </button>

      <Api_calling />
    </>
  );
};