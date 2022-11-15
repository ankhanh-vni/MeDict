import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";

import React, { useState, useEffect } from "react";

export default function WebSuggestion({ fromEng, response }) {
  return (
    <>
      {fromEng ? (
        <div className="header__search-result">
          {response.map((word) => (
            <a href="#" className="header__search-result-suggest">
              <i className="fas fa-search header__search__btn-icon" />
              {word.en}
            </a>
          ))}
        </div>
      ) : (
        <div className="header__search-result">
          {response.map((word) => (
            <a href="#" className="header__search-result-suggest">
              <i className="fas fa-search header__search__btn-icon" />
              {word.vn}
            </a>
          ))}
        </div>
      )}
      ;
    </>
  );
}
