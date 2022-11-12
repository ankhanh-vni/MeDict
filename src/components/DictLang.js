import "./style/base.css";
import "./style/main.css";
import "./style/responsive.css";

import React from "react";
import { useState } from "react";

function DictLang() {
  const [fromEnd, setFromEng] = useState(true);

  return (
    <div className="header__dictlang">
      <div className="header__dictlang-item" id="header__dictlang-en">
        <h6 className="header__dictlang-item-title">English</h6>
      </div>
      <div className="header__dictlang-item" id="header__dictlang-vn">
        <h6 className="header__dictlang-item-title">Vietnamese</h6>
      </div>
      <a className="header__dictlang-btn" href="javascript:SwapDivsWithClick()">
        <i className="header__dictlang-btn-icon fas fa-right-left" />
      </a>
    </div>
  );
}

export default DictLang;
