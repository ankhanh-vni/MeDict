import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";

import React from "react";
import { useState } from "react";

export default function Result(props) {
  return (
    <>
      {props.showResult && (
        <section className="modal_result modal_result-mobile">
          <div className="modal_result-container">
            <header className="modal_result-header">
              <div
                className="modal_result-close"
                onClick={() => props.setShowResult(!props.showResult)}
              >
                <i className="fa-solid fa-xmark" />
              </div>
              Search Result
            </header>
            <section className="section-item section-search-result">
              <div className="result-item">
                <div className="result-item__term">
                  <div className="result-item__term-header">
                    {props.fromEng ? (
                      <h1>{props.result.en}</h1>
                    ) : (
                      <h1>{props.result.vn}</h1>
                    )}
                    <i className="fa-solid fa-volume-high result-item__term-speaker" />
                  </div>
                  <div className="result-item__term-attr">
                    {props.fromEng ? (
                      <span>{props.result.type}</span>
                    ) : (
                      <span>{props.result.type}</span>
                    )}
                  </div>
                </div>
                <div className="separation_line" />
                <div className="result-item__term">
                  <div className="result-item__term-header">
                    {props.fromEng ? (
                      <h1>{props.result.vn}</h1>
                    ) : (
                      <h1>{props.result.en}</h1>
                    )}
                    <i className="fa-solid fa-volume-high result-item__term-speaker" />
                  </div>
                  <div className="result-item__term-attr">
                    {props.fromEng ? (
                      <span>{props.result.type_vn}</span>
                    ) : (
                      <span>{props.result.type_vn}</span>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      )}
    </>
  );
}
