import { useState } from "react";
import { LOGO_URL } from "../utils/constant.js";

export default () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={`${LOGO_URL}`}></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
