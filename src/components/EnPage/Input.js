import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";

function Input(props) {
  const [wordList, setWordList] = useState();

  const [text, setText] = useState();
  const [countries, setCountries] = useState([]);
  const [debouncedText] = useDebounce(text, 500);
  useEffect(() => {
    async function getSuggestion(text, token, fromEng = props.fromEng) {
      return axios
        .get("https://restcountries.com/v3.1/name/", {
          text: text,
          fromEng: fromEng,
          cancelToken: token,
        })
        .then((response) => {
          setWordList(response.data);
        });
    }

    const source = axios.CancelToken.source();
    if (debouncedText) {
      getSuggestion(debouncedText, source.token)
        .then(setCountries)
        .catch((e) => {
          if (axios.isCancel(source)) {
            return;
          }
          setCountries([]);
        });
    } else {
      setCountries([]);
    }
    return () => {
      source.cancel(
        "Canceled because of component unmounted or debounce Text changed"
      );
    };
  }, [debouncedText, props.fromEng]);

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <p>Actual value: {text}</p>
      <p>Debounced value: {debouncedText}</p>
      <p>Counties:</p>
      {countries && countries.length ? (
        <ul>
          {countries.map((country) => (
            <li>{country}</li>
          ))}
        </ul>
      ) : (
        <p>No Countries Found</p>
      )}
    </div>
  );
}

export default Input;
