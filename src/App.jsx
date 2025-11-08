import { useState } from "react";
import "./App.css";

function App() {
  // Use useState to create a 'count' state variable
  //    and its 'setCount' function, initialized to 0.
  const [count, setCount] = useState(0);

  // Create functions to handle the clicks
  const handleIncrement = () => {
    // Call setCount to increase the count
    setCount(count + 1);
  };

  const handleIncrementBy5 = () => {
    setCount(count + 5);
  }

  const handleIncrementBy10 = () => {
    setCount(count + 10);
  }

  const handleDecrement = () => {
    // Call setCount to decrease the count
    setCount(count - 1);
  };

  const handleReset = () => {
    // Call setCount to reset the count to 0
    setCount(0);
  };

  let countColorClass = ""; // Default (for 0)
  if (count > 0) {
    countColorClass = "positive-color";
  } else if (count < 0) {
    countColorClass = "negative-color";
  }

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <h2 className={countColorClass}>Count: {count}</h2>

        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementBy5}>Increment by 5</button>
        <button onClick={handleIncrementBy10}>Increment by 10</button>
        <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
