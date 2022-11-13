import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";

import React from "react";
import { useState } from "react";

function DictLang() {
  const [fromEnd, setFromEng] = useState(true);

  const handleClick = () => {
    setFromEng(!fromEnd);
  };

  return (
    <div className="header__dictlang">
      {fromEnd ? (
        <>
          <div className="header__dictlang-item" id="header__dictlang-en">
            <h6 className="header__dictlang-item-title">English</h6>
          </div>
          <div className="header__dictlang-item" id="header__dictlang-vn">
            <h6 className="header__dictlang-item-title">Vietnamese</h6>
          </div>
        </>
      ) : (
        <>
          <div className="header__dictlang-item" id="header__dictlang-vn">
            <h6 className="header__dictlang-item-title">Vietnamese</h6>
          </div>
          <div className="header__dictlang-item" id="header__dictlang-en">
            <h6 className="header__dictlang-item-title">English</h6>
          </div>
        </>
      )}

      <button
        className="header__dictlang-btn"
        href="javascript:SwapDivsWithClick()"
        onClick={handleClick}
      >
        <i className="header__dictlang-btn-icon fas fa-right-left" />
      </button>
    </div>
  );
}

export default DictLang;
