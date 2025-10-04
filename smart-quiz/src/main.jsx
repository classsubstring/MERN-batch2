import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import Services from "./pages/Services.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<h1>This is register page</h1>} />
        <Route path="/dashboard/:username/:userid" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
