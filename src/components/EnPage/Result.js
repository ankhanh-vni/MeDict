import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";

import React from "react";
import { useState } from "react";
import { NavItem } from "react-bootstrap";

export default function Result(props) {
  function play1() {
    var audio1 = new Audio("http://127.0.0.1:5000/static/"+props.result.en+".mp3");
    audio1.play();
  }

  function play2() {
    var audio2 = new Audio("http://127.0.0.1:5000/static/"+props.result.vn+".mp3");
    audio2.play();
  }

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
            </header>6
            <section className="section-item section-search-result">
              <div className="result-item">
                <div className="result-item__term">
                  <div className="result-item__term-header">
                    {props.fromEng ? (
                      <h1>{props.result.en}</h1>
                    ) : (
                      <h1>{props.result.vn}</h1>
                    )}
                    {props.fromEng ? (
                      <i className="fa-solid fa-volume-high result-item__term-speaker" onClick={play1}/>
                    ) : (
                      <i className="fa-solid fa-volume-high result-item__term-speaker" onClick={play2}/>
                    )}
                  </div>
                  <div className="result-item__term-attr">
                    {props.fromEng ? (
                      <span>{props.result.type}</span>
                    ) : (
                      <span>{props.result.type_vn}</span>
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
                      {props.fromEng ? (
                      <i className="fa-solid fa-volume-high result-item__term-speaker" onClick={play2}/>
                    ) : (
                      <i className="fa-solid fa-volume-high result-item__term-speaker" onClick={play1}/>
                    )}
                  </div>
                  <div className="result-item__term-attr">
                    {props.fromEng ? (
                      <span>{props.result.type_vn}</span>
                    ) : (
                      <span>{props.result.type}</span>
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
