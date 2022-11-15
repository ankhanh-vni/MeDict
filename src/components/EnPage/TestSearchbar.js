import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";
import Input from "./Input";

function TestSearchBar(props) {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="header__search">
      <h3 className="header__search__text">Start your search!</h3>
      <Input className="header__search__btn-text" fromEng={props.fromEng} />
      <div
        className="header__search__btn"
        onClick={() => setOpenSearch(!openSearch)}
      >
        <i className="fas fa-search header__search__btn-icon" />
        <input
          className="header__search__btn-text"
          type="text"
          placeholder="Enter your word"
        />
      </div>
      {openSearch && (
        <div className="header__search-result">
          <a href="#" className="header__search-result-suggest">
            <i className="fas fa-search header__search__btn-icon" />
            acinic (adjective)
          </a>
          <a href="#" className="header__search-result-suggest">
            <i className="fas fa-search header__search__btn-icon" />
            Result
          </a>
          <a href="#" className="header__search-result-suggest">
            <i className="fas fa-search header__search__btn-icon" />
            Result
          </a>
          <a href="#" className="header__search-result-suggest">
            <i className="fas fa-search header__search__btn-icon" />
            Result
          </a>
        </div>
      )}
    </div>
  );
}

export default TestSearchBar;
