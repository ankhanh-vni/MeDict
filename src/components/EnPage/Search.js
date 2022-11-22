import React, { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import "../style/base.css";
import "../style/main.css";
import "../style/responsive.css";
import axios from "axios";
const baseURL = "http://172.16.18.152:5000/";




function Search(props) {
    const [wordList, setWordList] = useState();
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
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // console.log(string, results)
        // if (fromEng) {
        //     return axios
        //         .get(baseURL, {
        //             params: { word: string },
        //         })
        //         .then((response) => {
        //             results = response.json()
        //         });
        // }
        // else {
        //     return axios
        //         .get(baseURL, {
        //             params: { word: string },
        //         })
        //         .then((response) => {
        //             results = response.json()
        //         });
        // }
    }

    const handleOnHover = (result) => {
        // the item hovered
        // console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(props)
        props.setShowResult(!props.showResult);
        props.setResult({
            en: `${item.en}`,
            vn: `${item.vn}`,
            type: `${item.type}`,
        });
    }



    const handleOnFocus = () => {
        console.log('Focused')
    }

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
                    formatResult={formatResult}
                    styling={
                        {
                            hoverColor: "pink"
                        }
                    }
                    fuseOptions={{ keys: fromEng ? ["en"] : ["vn"] }}
                />
            </div>

        </div>
    )
}

export default Search;