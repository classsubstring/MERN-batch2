import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/counter";

function App() {
  const [users, setUsers] = useState([
    {
      name: "user1",
      id: "user01",
      about: "This is dummy information about user 1",
    },
    {
      name: "user2",
      id: "user02",
      about: "This is dummy information about user 2",
    },
  ]);

  function clearData() {
    setUsers([]);
  }

  function addData() {
    setUsers([
      ...users,
      {
        name: "user3",
        id: "user03",
        about: "This is dummy information abour user 3",
      },
    ]);

    console.log(users);
  }

  return (
    <>
      <Counter />
    </>
  );
}

export default App;

