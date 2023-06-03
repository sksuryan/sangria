import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// start prefetching of images
import { init as initPreFetch } from "./helpers/prefetch";
initPreFetch().then();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
