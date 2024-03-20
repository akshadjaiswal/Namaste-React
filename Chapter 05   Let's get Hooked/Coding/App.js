import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

const styleCard = {
  backgroundColor: "#D3D3D3",
};

const resObj = {
  name: "Aaradhana Foods",
  cuisines: ["Kathiawadi Thali", "Traditional", "Sweet", "Spicy"],
  avgRating: "4.6",
  costForTwo: 40000,
  deliveryTime: 125,
};



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
