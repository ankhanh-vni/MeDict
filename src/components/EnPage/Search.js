import React, { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";


function Search(props) {
    const fromEng = props.fromEng
    // note: the id field is mandatory
    const items = [
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

    const handleOnSearch = (string, results) => {
        // console.log(string, results);
    };

    const handleOnHover = (result) => {
        // console.log(result);
    };

    const handleOnSelect = (item) => {
        props.setShowResult(!props.showResult);
        props.setResult({
            en: `${item.en}`,
            vn: `${item.vn}`,
            type: `${item.type}`,
        });
    };

    const handleOnFocus = () => {
        // console.log("Focused");
    };

    const handleOnClear = () => {
        // console.log("Cleared");
    };

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{fromEng ? item.en : item.vn} ({item.type})</span>
            </>
        )
    }

    return (
        <div className="header__search">

            <div style={{ width: 400 }}>
                <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    onClear={handleOnClear}
                    formatResult={formatResult}
                    fuseOptions={{ keys: fromEng ? ["en"] : ["vn"] }}
                    resultStringKeyName={fromEng ? ["en"] : ["vn"]}


                />
            </div>

        </div>
    )
}

export default Search;