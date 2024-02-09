//Creating h1 element and what we want to print in tha h1 element

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );
console.log(parent);
//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering heading in the root
root.render(parent);
