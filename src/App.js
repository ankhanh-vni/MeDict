import "./App.css";
import Home from "./components/Home";

import "./style/base.css";
import "./style/main.css";
import "./style/responsive.css";

function App() {
  return (
    <>
      <header className="header" id="searching">
        <div className="header-top">
          <div className="wide">
            <div className="main-header">
              <div className="header__logo">
                <img
                  src="./assets/img/logo_vinuni_white.png"
                  alt=""
                  className="header_logo-img"
                />
                <p className="header_logo-name">Softcon</p>
              </div>
              {/* Cần sửa thêm */}
              <div className="header__navbar">
                <div className="header__navbar-normal">
                  <a
                    href="#searching"
                    className="header__navbar-item border-choosen"
                  >
                    MEDICAL DICTIONARY
                  </a>
                  {/* <a class="header__navbar-item">HISTORY</a>          */}
                </div>
              </div>
              <div className="header__weblang">
                <div className="header__weblang-item header__weblang-menu">
                  <i className="header__weblang-menu-icon fas fa-bars" />
                  <i className="header__weblang-globe-icon fas fa-globe" />
                </div>
                <div className="header__weblang-sub">
                  <div className="header__weblang-sub-list">
                    <input
                      type="radio"
                      defaultChecked=""
                      id="lang1"
                      name="selection"
                      hidden=""
                    />
                    <label
                      htmlFor="lang1"
                      className="header__weblang-sub-button"
                    >
                      <a href="index.html" className="text-white">
                        English
                      </a>
                    </label>
                    <input type="radio" id="lang2" name="selection" hidden="" />
                    <label
                      htmlFor="lang2"
                      className="header__weblang-sub-button"
                    >
                      <a href="index_vn.html">Vietnamese</a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__dictlang">
          <div className="header__dictlang-item" id="header__dictlang-en">
            <h6 className="header__dictlang-item-title">English</h6>
          </div>
          <div className="header__dictlang-item" id="header__dictlang-vn">
            <h6 className="header__dictlang-item-title">Vietnamese</h6>
          </div>
          <a
            className="header__dictlang-btn"
            href="javascript:SwapDivsWithClick()"
          >
            <i className="header__dictlang-btn-icon fas fa-right-left" />
          </a>
        </div>
        <div className="header__search">
          <h3 className="header__search__text">Start your search!</h3>
          <div className="header__search__btn">
            <i className="fas fa-search header__search__btn-icon" />
            <input
              className="header__search__btn-text"
              type="text"
              placeholder="Enter your word"
            />
          </div>
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
        </div>
      </header>
      <footer className="footer-bot">
        {/* <div class="footer-info">
      <div class="footer-connection">
          <h3>Kết nối </h3>
          <a class="github footer-social-icon" id="icon-github" href="#">
              <i class="fa-brands fa-github"></i>
          </a>
          <a class="email footer-social-icon" href="#">
              <i class="fa-regular fa-envelope"></i>
          </a>
      </div>
      <div class="col-md-7 footer-contact-email">
          <h3>
              <i class="fa-regular fa-envelope"></i>For more information
          </h3>
          <form action="#" method="post">
              <input type="email" placeholder="Enter your email" name="email" required="">
              <input type="submit" value="Send">
          </form>
      </div>
      <div class="clearfix"> </div>
  </div> */}
        <div className="footer-navbar">
          <div className="col-xs-9 footer-navbar-menu">
            <ul>
              <li>
                <a href="#searching">Back to the top</a>
              </li>
              {/* <li>
                  <a href="#history">HISTORY</a>
              </li> */}
            </ul>
          </div>
          {/* <div class="clearfix"></div> */}
          <div className="copy-right">
            <div className="footer-connection">
              <a
                className="github footer-social-icon"
                id="icon-github"
                href="#"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a className="email footer-social-icon" href="#">
                <i className="fa-regular fa-envelope" />
              </a>
            </div>
            <p>© 2022 SoftCon.</p>
          </div>
        </div>
      </footer>
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
