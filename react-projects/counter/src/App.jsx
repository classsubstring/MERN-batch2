import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(10);

  function increaseCount() {
    setCount(count + 1);
    console.log(`Button Clicked and the new value is ${count}`);
  }

  return (
    <>
      <h1>My Counter Application</h1>
      <div className="card">
        <button onClick={increaseCount}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
