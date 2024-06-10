import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

// const resObj = {
//   name: "Aaradhana Foods",
//   cuisines: ["Kathiawadi Thali", "Traditional", "Sweet", "Spicy"],
//   avgRating: "4.6",
//   costForTwo: 40000,
//   deliveryTime: 125,
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
