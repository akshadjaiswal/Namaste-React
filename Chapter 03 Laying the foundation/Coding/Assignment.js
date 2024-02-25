import React from "react";
import ReactDOM from "react-dom/client";
//Q1: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const heading = React.createElement(
  "div",
  { className: "title" },
  React.createElement("h1", { className: "title" }, "I am H1 tag"),
  React.createElement("h2", { className: "title" }, "I am H2 tag"),
  React.createElement("h2", { className: "title" }, "I am H3 tag")
);

// Q2: Create the same element using JSX
const header = (
  <div className="title">
    <h1 className="title">I am H1 tag</h1>
    <h2 className="title">I am H2 tag</h2>
    <h3 className="title">I am H3 tag</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(header);
