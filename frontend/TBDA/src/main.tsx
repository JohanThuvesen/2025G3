import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("No root element found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
