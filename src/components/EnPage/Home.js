import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";

import React from "react";
import { useState } from "react";

import NavBar from "./NavBar";
import DictLang from "./DictLang";
import SearchBar from "./SearchBar";

export default function Home() {
  const [fromEng, setFromEng] = useState(true);
  const handleClick = () => {
    setFromEng(!fromEng);
  };

  return (
    <header className="header" id="searching">
      <NavBar />
      <DictLang fromEng={fromEng} handleClick={handleClick} />
      <SearchBar />
    </header>
  );
}
