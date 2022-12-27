import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";

import WordSuggestion from "./WordSuggestion";

// function getSuggestion(text, token) {
//   return axios
//     .get("https://restcountries.com/v3.1/name/" + text, {
//       cancelToken: token,
//     })
//     .then(({ data }) => data.map(({ name }) => name.common));
// }

// const initalText = "United";

// function Input() {
//   const [text, setText] = useState(initalText);
//   const [countries, setCountries] = useState([]);
//   const [debouncedText] = useDebounce(text, 500);
//   useEffect(() => {
//     const source = axios.CancelToken.source();
//     if (debouncedText) {
//       getSuggestion(debouncedText, source.token)
//         .then(setCountries)
//         .catch((e) => {
//           if (axios.isCancel(source)) {
//             return;
//           }
//           setCountries([]);
//         });
//     } else {
//       setCountries([]);
//     }
//     return () => {
//       source.cancel(
//         "Canceled because of component unmounted or debounce Text changed"
//       );
//     };
//   }, [debouncedText]);

//   return (
//     <div>
//       <input
//         defaultValue={initalText}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <p>Actual value: {text}</p>
//       <p>Debounced value: {debouncedText}</p>
//       <p>Counties:</p>
//       {countries && countries.length ? (
//         <ul>
//           {countries.map((country) => (
//             <li>{country}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No Countries Found</p>
//       )}
//     </div>
//   );
// }

let response = [
  {
    vn: "xin chao",
    en: "hello",
    type: "v",
  },
  {
    vn: "tam biet",
    en: "goodbye",
    type: "v",
  },
  {
    vn: "qua tao",
    en: "apple",
    type: "n",
  },
  {
    vn: "qua cam",
    en: "orange",
    type: "n",
  },
];

function SearchBar(props) {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="header__search">
      <h3 className="header__search__text">Start your search!</h3>
      {/* <Input className="header__search__btn-text" /> */}
      <div
        className="header__search__btn"
        onClick={() => {
          setOpenSearch(!openSearch);
          props.setShowSearchMobile(!props.showSearchMobile);
          console.log("Search clicked");
        }}
      >
        <i className="fas fa-search header__search__btn-icon" />
        <input
          className="header__search__btn-text"
          type="text"
          placeholder="Enter your word"
        />
      </div>
      {openSearch && <WordSuggestion {...props} response={response} />}
    </div>
  );
}

export default SearchBar;
