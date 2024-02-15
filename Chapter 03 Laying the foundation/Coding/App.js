import React from "react";
import ReactDOM from "react-dom/client";

//React element

const heading = React.createElement(
  "h1",
  { id: "root" },
  "Akshad is learning React js"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
