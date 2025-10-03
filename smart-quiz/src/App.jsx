import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-10 bg-green-300">
        <h1 className="text-3xl font-bold text-red-500">This is home page</h1>
        <button className="bg-blue-600 text-white px-3 py-2 rounded">
          Click here
        </button>
      </div>
    </>
  );
}

export default App;
