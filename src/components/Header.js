import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

export default () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  
  const {user} = useContext(UserContext);
  
  return (
    <div className="flex justify-between bg-pink-200  shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={`${LOGO_URL}`}/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">ContactUs</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">
            {user}
          </li>
        </ul>
      </div>
    </div>
  );
};
