import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";
// import "../style/home.css";

import React from "react";
import { useState } from "react";
import useWindowDimensions from "../windowDim";

import NavBar from "./NavBar";
import DictLang from "./DictLang";
import SearchBar from "./SearchBar";
import Search from "./Search";
import SearchMobile from "./SearchMobile";
import TestSearchBar from "./TestSearchbar";

export default function Home(props) {
  const [items, setItems] = useState();
  const { height, width } = useWindowDimensions();

  return (
    <header className="header" id="searching">
      <NavBar />
      <DictLang {...props} />
      <Search {...props} items={items} setItems={setItems} />
      {(() => {
        if (props.showSearchMobile && width <= 739) {
          return <SearchMobile {...props} />;
        }
      })()}
    </header>
  );
}
