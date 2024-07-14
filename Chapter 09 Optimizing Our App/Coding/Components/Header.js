import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("Header rendered");

  const onlineStatus = useOnlineStatus();

  //no dependancy aary => useEffect is called on every render
  // dependency arrya => useEffect is called on only initial render
  // if dependency is [btnName]=> useEffect is called every time btnName updated
  useEffect(() => {
    // console.log("useEffect called");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
        <h3>FoodieMint</h3>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "✅" : "⛔"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
