import "./App.css";
import Home from "./components/Home";
import DictLang from "./components/DictLang";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

import "./style/base.css";
import "./style/main.css";
import "./style/responsive.css";

function App() {
  return (
    <>
      <header className="header" id="searching">
        <NavBar />
        <DictLang />
        <SearchBar />
      </header>
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
      <section className="modal_result modal_result-mobile">
        <div className="modal_result-container">
          <header className="modal_result-header">
            <div className="modal_result-close">
              <i className="fa-solid fa-xmark" />
            </div>
            Search Result
          </header>
          <section className="section-item section-search-result">
            <div className="result-item">
              <div className="result-item__term">
                <div className="result-item__term-header">
                  <h1>acinic</h1>
                  <i className="fa-solid fa-volume-high result-item__term-speaker" />
                </div>
                <div className="result-item__term-attr">
                  <span>adjective</span>
                </div>
              </div>
              <div className="separation_line" />
              <div className="result-item__term">
                <div className="result-item__term-header">
                  <h1>tuyến nang</h1>
                  <i className="fa-solid fa-volume-high result-item__term-speaker" />
                </div>
                <div className="result-item__term-attr">
                  <span>tính từ</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;
