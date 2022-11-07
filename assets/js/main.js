/* Display Web Language */

const weblang = document.querySelector('.header__weblang-sub');
const menu = document.querySelector('.header__weblang-menu');
menu.onclick = function () {
    if (weblang.classList.contains('display')) {
        weblang.classList.remove('display');
    } else {
        weblang.classList.add('display');
    }
}

/* Exchange Dictionary Language */

function SwapDivsWithClick() {
    $('#header__dictlang-en, #header__dictlang-vn').first().before(function(){
    	return $(this).next();
    });
}

/* Display Suggestion Result */

const searchSuggest = document.querySelector('.header__search-result');
const searchBtn = document.querySelector('.header__search__btn');
searchBtn.onclick = function () {
    if (searchSuggest.classList.contains('display')) {
        searchSuggest.classList.remove('display');
    } else {
        searchSuggest.classList.add('display');
    }
}

/* Display Search Result */

const searchResult = document.querySelector('.section-search-result');
const suggestTerm = document.querySelector('.header__search-result');
suggestTerm.onclick = function () {
    // if (searchResult.classList.contains('display')) {
    //     searchResult.classList.remove('display');
    // } else {
    //     searchResult.classList.add('display');
    // }
    searchResult.classList.add('display');
}

/*Expan Word Meaning*/

const meaning = document.querySelector('.history-item-meaning');
const expandBtn = document.querySelector('.history-item-expand');
expandBtn.onclick = function () {
    if (meaning.classList.contains('display')) {
        meaning.classList.remove('display');
    } else {
        meaning.classList.add('display');
    }
}

/**-----------------------Header fixed---------------------- */
// let headerTop = document.querySelector('.header-top');

// window.onscroll = function () {
//     if (window.scrollY > 0) {
//         /**-------------Header Mobile--------------- */
//         if (!headerMobile.classList.contains('header-mobile--background')) {
//             headerMobile.classList.add('header-mobile--background')
//         }
//     } else {
//         /**-------------Header Mobile--------------- */
//         if (headerMobile.classList.contains('header-mobile--background')) {
//             headerMobile.classList.remove('header-mobile--background')
//         }
//     }
// }