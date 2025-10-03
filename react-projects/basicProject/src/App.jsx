import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="flex flex-row gap-5">
        <Courses
          heading="Javascript"
          desc="This is a javascript course launched by substring technologies"
          css="text-3xl text-green-500"
        />
        <Courses
          heading="MERN"
          desc="This is a javascript course launched by substring technologies"
        />
        <Courses
          heading="Java"
          desc="This is a javascript course launched by substring technologies"
        />
        <Courses
          heading="Python"
          desc="This is a javascript course launched by substring technologies"
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
