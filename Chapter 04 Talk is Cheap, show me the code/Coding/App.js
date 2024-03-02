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
          src="https://icon-library.com/images/order-food-online-icon/order-food-online-icon-13.jpg"
        />
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

const AppLayout = () => {
  return <div className="app">
    <Header/>
  </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
