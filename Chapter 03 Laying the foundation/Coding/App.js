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
//React Componenet TITLE
const Title = () => (
  <h1 id="heading" className="head" tabIndex="5">
    Welcome to JSX Learning🧑🏻‍💻
  </h1>
);

//React element title
const title = (
  <h1 id="heading" className="head" tabIndex="5">
    Welcome to JSX Learning🧑🏻‍💻
  </h1>
);

const number = 1000;

//React Componenet(2 types)
//1) Class Based Component - OLD way
//2) Functional Component - NEW way

//React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {999 + 999}
    <Title />
    <h1 className="heading">Hello Akshad from Functional Component</h1>
    <MainComponent />
    <h2>{number}</h2>
    {console.log("Akshad Jaiswal React learnings")}
  </div>
);
const MainComponent = () => (
  <h2 className="heading">This is the main componenet </h2>
);

//Same as above syntax
//const HeadingComponent2 = () => <h1>Hello Akshad from Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
root.render(<HeadingComponent />);
