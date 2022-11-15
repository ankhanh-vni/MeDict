import "./App.css";
import React, { useState } from "react";
import Home from "./components/EnPage/Home";
import Footer from "./components/EnPage/Footer";
import Result from "./components/EnPage/Result";
import Test from "./components/Test";

import "./components/style/base.css";
import "./components/style/main.css";
import "./components/style/responsive.css";

function App() {
  const [showResult, setShowResult] = useState(false);
  return (
    <>
      <Home />
      <Footer />
      <section className="search-mobile">
        <div className="search-mobile-head">
          <i className="search-mobile-head-icon fas fa-angle-left" />
          <input
            className="search-mobile-head-input"
            type="text"
            placeholder="Enter your word?"
          />
        </div>
        <div className="line-result-mobile" />
        <div className="search-mobile-body">
          <div className="search-mobile-suggest">
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
        </div>
      </section>
      <Result showResult={showResult} setShowResult={setShowResult} />
    </>
  );
}

export default App;
