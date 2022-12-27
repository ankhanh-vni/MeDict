import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";
// import "../style/dictlang.css";

import React from "react";

function DictLang({ fromEng, handleClick }) {
  return (
    <div className="header__dictlang">
      <div className="header__dictlang-item">
        {fromEng ? (
          <h6 className="header__dictlang-item-title" id="header__dictlang-en">
            English
          </h6>
        ) : (
          <h6 className="header__dictlang-item-title" id="header__dictlang-vn">
            Vietnamese
          </h6>
        )}
      </div>
      <div className="header__dictlang-item">
        {fromEng ? (
          <h6 className="header__dictlang-item-title" id="header__dictlang-vn">
            Vietnamese
          </h6>
        ) : (
          <h6 className="header__dictlang-item-title" id="header__dictlang-en">
            English
          </h6>
        )}
      </div>

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
