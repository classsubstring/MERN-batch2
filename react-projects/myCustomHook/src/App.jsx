import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import useData from "./custom hooks/useData";

function App() {
  const [count, setCount] = useState(0);

  const data = useData("https://jsonplaceholder.typicode.com/comments");

  function handleCount(params) {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <>
      <h1 className="bg-red-600">Hello!! users will be visible here</h1>
      <button onClick={handleCount}>Count {count}</button>

      {/* <div className="w-full bg-red-100 h-80">
        {data.map((user) => {
          return (
            <div>
              <p>{user.id}</p>
              <p>{user.name}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default App;
