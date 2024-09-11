import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items)

  //no dependancy aaray => useEffect is called on every render
  // dependency array => useEffect is called on only initial render
  // if dependency is [btnName]=> useEffect is called every time btnName updated

  return (
    <div className="flex justify-between  shadow-lg rounded-md sm:bg-yellow-50 lg:bg-green-50 font-mono">
      <div className="flex bg-white  ">
        <Link to="/">
          <img className="w-60 " src={LOGO_URL} />
          <h3 className="ml-20">FoodieMint</h3>
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-9 m-9  ">
          <li className="px-4 py-4">
            Online Status:{onlineStatus ? "✅" : "⛔"}
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl font-bold text-xl">
            <Link to="/cart"><span>🛒({cartItems.length}🥢)</span></Link>
          </li>
          <li>
            <button
              className=" px-4 bg-slate-50 hover:bg-slate-400  py-4 rounded-xl"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 py-4 font-bold text-green-700 ">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
