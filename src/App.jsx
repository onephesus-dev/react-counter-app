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

  const handleDecrement = () => {
    // Call setCount to decrease the count
    setCount(count - 1);
  };

  const handleReset = () => {
    // Call setCount to reset the count to 0
    setCount(0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <h2>Count: {count}</h2>

        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
