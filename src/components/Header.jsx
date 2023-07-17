import React from "react";

import img from "../components/img/mood.png";

function Header() {
  function dark() {
    const body = document.documentElement;
    body.classList.toggle("dark");
  }
  return (
    <div className="header">
      <div className="header__box container">
        <h1 className="header-title">Where in the world?</h1>
        <div className="header-right">
          
          <img className="moon" onClick={dark} src={img} alt=""  />
          <p className="header-dark" onClick={dark}>
            Dark Mode
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
