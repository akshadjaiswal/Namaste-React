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

const RestaurantCard=()=>{
  return(
    <div></div>
  )
}
const Body=()=>{
  return(
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        //RestaurantCard
      </div>
    </div>
  )
}
const AppLayout = () => {
  return <div className="app">
    <Header/>
    <Body/>
  </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
