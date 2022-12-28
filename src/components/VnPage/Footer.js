import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";

import React from "react";

export default function Footer() {
  return (
    <footer className="footer-bot">
      <div className="footer-navbar">
        <div className="col-xs-9 footer-navbar-menu">
          <ul>
            <li>
              <a href="#searching">Trở lại đầu trang</a>
            </li>
          </ul>
        </div>
        <div className="copy-right">
          <div className="footer-connection">
            <a className="github footer-social-icon" id="icon-github" href="#">
              <i className="fa-brands fa-github" />
            </a>
            <a className="email footer-social-icon" href="#">
              <i className="fa-regular fa-envelope" />
            </a>
          </div>
          <p>© 2022 SoftCon.</p>
        </div>
      </div>
    </footer>
  );
}
