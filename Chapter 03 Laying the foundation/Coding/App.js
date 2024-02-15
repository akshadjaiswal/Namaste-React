import React from "react";
import ReactDOM from "react-dom/client";

//React element

const heading = React.createElement(
  "h1",
  { id: "root" },
  "Akshad is learning React js"
);

//JSX- Where we can merge html and js together // JSX is HTML like sysntax
const jsxheading = <h1 id="heading">Welcome to react learning</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
