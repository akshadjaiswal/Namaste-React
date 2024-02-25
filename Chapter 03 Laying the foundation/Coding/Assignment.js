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

//Q3: Create a functional component of the same with JSX
const Header = () => (
  <div className="title">
    <h1 className="title">I am H1 tag</h1>
    <h2 className="title">I am H2 tag</h2>
    <h3 className="title">I am H3 tag</h3>
  </div>
);

//Q4: Pass attribute into the tag in JSX
const Header2 = () => (
  <div className="title">
    <h1 style={{ color: "aqua" }} className="title">
      I am H1 tag
    </h1>
    <h2 style={{ color: "red" }} className="title">
      I am H2 tag
    </h2>
    <h3 style={{ color: "orange" }} className="title">
      I am H3 tag
    </h3>
  </div>
);

//Q5 Add component inside another component
const Header3=()=>(
    <h1>Another component</h1>
);

const Header4 = () => (
    <div className="title">
        {<Header3/>}
      <h1 style={{ color: "aqua" }} className="title">
        I am H1 tag
      </h1>
      <h2 style={{ color: "red" }} className="title">
        I am H2 tag
      </h2>
      <h3 style={{ color: "orange" }} className="title">
        I am H3 tag
      </h3>
    </div>
  );
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(header);
// root.render(<Header />);
// root.render(<Header2 />);
root.render(<Header4 />);
