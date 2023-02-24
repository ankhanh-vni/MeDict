import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";
// import "../style/navbar.css";
import logo from "../img/logo_vinuni_white.png";

import React from "react";

function NavBar() {
  return (
    <div className="header-top">
      <div className="wide">
        <div className="main-header">
          <div className="header__logo">
            <img src={logo} alt="" className="header_logo-img" />
            <p className="header_logo-name">Softcon</p>
          </div>
          <div className="header__navbar">
            <div className="header__navbar-normal">
              <a
                href="#searching"
                className="header__navbar-item border-choosen"
              >
                MEDICAL DICTIONARY
              </a>
              {/* <a class="header__navbar-item">HISTORY</a>          */}
            </div>
          </div>
          <div className="header__weblang">
            <div className="header__weblang-item header__weblang-menu">
              <i className="header__weblang-menu-icon fas fa-bars" />
              <i className="header__weblang-globe-icon fas fa-globe" />
            </div>
            <div className="header__weblang-sub">
              <div className="header__weblang-sub-list">
                <input
                  type="radio"
                  defaultChecked=""
                  id="lang1"
                  name="selection"
                  hidden="true"
                />
                <label htmlFor="lang1" className="header__weblang-sub-button">
                  <a href="index.html" className="text-white">
                    English
                  </a>
                </label>
                <input type="radio" id="lang2" name="selection" hidden="true" />
                <label htmlFor="lang2" className="header__weblang-sub-button">
                  <a href="index_vn.html">Vietnamese</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
