//Episode 02 Igniting our app

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Akshad Heading"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Akshad Heading No.01"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading1,
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);
