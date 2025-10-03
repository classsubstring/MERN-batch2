import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import Services from "./pages/Services.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<h1>This is login page</h1>} />
        <Route path="/signup" element={<h1>This is register page</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
