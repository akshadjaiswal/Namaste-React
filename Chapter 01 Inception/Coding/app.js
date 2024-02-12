//Episode 01- Inception

// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

//Creating h1 element and what we want to print in tha h1 element (nested)

//Reactjs Core parts
import React from "react";
import  ReactDOM  from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
]);

// Single element (not nested)
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );

//returning what inside parent 
console.log(parent); //object

//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering heading in the root
root.render(parent);
