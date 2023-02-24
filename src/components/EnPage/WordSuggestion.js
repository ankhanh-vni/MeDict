/* eslint-disable jsx-a11y/anchor-is-valid */
import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";

import React, { useState, useEffect } from "react";

export default function WordSuggestion(props) {
  return (
    <>
      {props.fromEng ? (
        <div className="header__search-result">
          {props.response.map((word, index) => (
            <a
              href="#"
              className="header__search-result-suggest"
              onClick={() => {
                props.setShowResult(!props.showResult);
                props.setResult({
                  en: `${props.response[index].en}`,
                  vn: `${props.response[index].vn}`,
                  type: `${props.response[index].type}`,
                });
              }}
            >
              <i
                className="fas fa-search header__search__btn-icon"
                key={index}
              />
              {word.en}
            </a>
          ))}
        </div>
      ) : (
        <div className="header__search-result">
          {props.response.map((word) => (
            <a href="#" className="header__search-result-suggest">
              <i className="fas fa-search header__search__btn-icon" />
              {word.vn}
            </a>
          ))}
        </div>
      )};
    </>
  );
}
