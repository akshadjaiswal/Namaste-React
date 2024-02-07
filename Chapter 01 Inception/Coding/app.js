//Creating h1 element and what we want to print in tha h1 element
const heading = React.createElement(
  "h1",
  { id: "heading", xyz:"abc" },
  "Hello world from React!"
);
console.log(heading)
//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering heading in the root
root.render(heading);
