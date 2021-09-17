import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import  'leaflet/dist/leaflet.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


