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

//Slight difference in between JSX and HTML
//For class use (className)
//for tabindex use (tabIndex)
const jsxheading = (
  <h1 id="heading" className="head">
    Welcome to react learning
  </h1>
);

//React Componenet(2 types)
//1) Class Based Component - OLD way
//2) Functional Component - NEW way

//React Functional Component
const HeadingComponent = () => {
  return <h1>Hello Akshad from Functional Component</h1>;
};

//Same as above syntax
const HeadingComponent2 = () => <h1>Hello Akshad from Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
