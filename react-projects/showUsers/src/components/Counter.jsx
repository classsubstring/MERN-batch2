import React, { useEffect, useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Shruti");
  const [timer, setTimer] = useState(null);
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const counterRef = useRef(0);

  function increaseCount() {
    // setCount(count + 1);
  }

  function handledata(params) {
    setData("Substring technologies");
  }

  function handleClick() {
    console.log(inputRef.current);
    inputRef.current.style.width = "400px";
    inputRef.current.style.backgroundColor = "red";
  }

  useEffect(() => {
    // setCount(count + 1);
    console.log(counterRef.current);
    counterRef.current += 1;
  });

  //   useEffect(() => {
  //     const time = setInterval(() => {
  //       setTimer(new Date().toISOString());
  //     }, 5000);
  //     console.log(timer);

  //     return clearInterval(() => time);
  //   }, [timer]);
  return (
    <>
      {/* <h1 className="text-2xl text-red-500">Counter : {timer}</h1> */}
      <input
        type="text"
        className="w-40 text-2xl bg-white text-black rounded-2xl"
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-blue-500 p-4 m-4" onClick={handleClick}>
        Click me
      </button>

      <h4>Value: {value}</h4>

      <h4>Count: {counterRef.current}</h4>
    </>
  );
};

export default Counter;
