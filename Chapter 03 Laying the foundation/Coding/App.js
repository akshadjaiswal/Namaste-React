import React from "react";
import ReactDOM from "react-dom/client";

//React element
//React.createElement => ReactElement - Js Object=.HTMLelement(render)
const heading = React.createElement(
  "h1",
  { id: "root" },
  "Akshad is learning React js"
);

//JSX- Where we can merge html and js together // JSX is HTML like sysntax
//All this is get done with the help of babel of the parcel
//JSX- //React.createElement => ReactElement - Js Object=.HTMLelement(render)
const jsxheading = <h1 id="heading">Welcome to react learning</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
