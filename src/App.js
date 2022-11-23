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
  const [result, setResult] = useState({
    en: "",
    vn: "",
    type: "",
    type_vn: "",
  });
  const [fromEng, setFromEng] = useState(false);
  const handleClick = () => {
    setFromEng(!fromEng);
  };

  // convert unicode to string in Vietnamese
  function unicodeToChar(text) {
    return text.replace(/\\u[\dA-F]{4}/gi, function (match) {
      return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
    });
  }

  return (
    <>
      {/* Home: tất cả trừ footer */}
      <Home
        result={result}
        setResult={setResult}
        showResult={showResult}
        setShowResult={setShowResult}
        fromEng={fromEng}
        setFromEng={setFromEng}
        handleClick={handleClick}
        handleUnicodeToChar={unicodeToChar}
      />
      <Footer />
      {/* Section: search của mobile */}
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
      {/* Result: cửa số pop up khi bấm vào word suggestion */}
      <Result
        showResult={showResult}
        setShowResult={setShowResult}
        result={result}
        setResult={setResult}
        fromEng={fromEng}
        setFromEng={setFromEng}
      />
    </>
  );
}

export default App;
