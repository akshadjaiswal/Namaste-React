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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
