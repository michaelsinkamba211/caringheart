import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
        <App />
  </StrictMode>
);

// Hide loader once React is ready
const loader = document.getElementById("loader");
if (loader) {
  loader.style.transition = "opacity 0.5s ease";
  loader.style.opacity = 0;
  setTimeout(() => loader.remove(), 500);
}