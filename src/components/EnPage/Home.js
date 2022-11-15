import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";

import React from "react";
import { useState } from "react";

import NavBar from "./NavBar";
import DictLang from "./DictLang";
import SearchBar from "./SearchBar";
import TestSearchBar from "./TestSearchbar";

export default function Home() {
  const [fromEng, setFromEng] = useState(false);
  const handleClick = () => {
    setFromEng(!fromEng);
  };

  return (
    <header className="header" id="searching">
      <NavBar />
      <DictLang fromEng={fromEng} handleClick={handleClick} />
      <SearchBar fromEng={fromEng} />
      {/* <TestSearchBar fromEng={fromEng} /> */}
    </header>
  );
}
