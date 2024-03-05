import React from "react";
import ReactDOM from "react-dom/client";
//Planning
/**
 * 1) Header
 *  - Log
 *  - Nav Items
 * 2)Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *        - Img
 *        - Name of Res, Star Ratings, Cuisine, etc
 * 3)Footer
 *  - Copyrights
 *  - Link
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png"
        />
        <h3>FoodieMint</h3>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "antiquewhite",
};
const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://content.jdmagicbox.com/comp/def_content/kathiyawadi-restaurants/1-kathiyawadi-restaurants-1-ki1aq.jpg"
      />
      <h3>{props.resname}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.ratings}</h4>
      <h4>34 mins</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resname="Aaradhana Foods"
          cuisine="Kathiwadi Thali"
          ratings="4.4 Stars"
        />
        <RestaurantCard
          resname="KFC"
          cuisine="Chicken Burgers"
          ratings="4.6 Stars"
        />
      </div>
    </div>
  );
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
