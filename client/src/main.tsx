import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const routeElement = document.getElementById("root") 
if(routeElement) {
  ReactDOM.createRoot(routeElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.log("Elemento con id 'route' no existe en el documento"); 
}
