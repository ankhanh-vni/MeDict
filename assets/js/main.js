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
const searchMobile = document.querySelector('.search-mobile');
const searchCloseMobile = document.querySelector('.search-mobile-head-icon');
const searchMobileBtn = document.querySelector('.search-mobile-head-input');
const mobileSuggest = document.querySelector('.search-mobile-suggest');
var x = window.matchMedia("(max-width: 739px)")

searchBtn.onclick = function () {
    if (x.matches) {
        /* Search-mobile */
        searchMobile.classList.add('display');
        // document.querySelector('body').classList.add('disabled-scroll'); 
    } else {
        if (searchSuggest.classList.contains('display')) {
            searchSuggest.classList.remove('display');
        } else {
            searchSuggest.classList.add('display');
        }
    }
}

searchMobileBtn.onclick = function () {
    mobileSuggest.classList.add('display');
}

searchCloseMobile.onclick = function () {
    searchMobile.classList.remove('display');
    // document.querySelector('body').classList.remove('disabled-scroll'); 
} 


/* Display Search Result */

// const searchResult = document.querySelector('.section-search-result');
// const suggestTerm = document.querySelector('.header__search-result');
// suggestTerm.onclick = function () {
//     searchResult.classList.add('display');
// }

const suggestTerm = document.querySelectorAll('.header__search-result-suggest')
const modal = document.querySelector('.modal_result')
const modalClose = document.querySelector(".modal_result-close")
const modalContainer = document.querySelector(".modal_result-container")

function removeSearchResult() {
    modal.classList.remove('open');
}

for (const term of suggestTerm) {
    term.addEventListener('click', showSearchResult);
}

function showSearchResult() {
    modal.classList.add('open');
    searchSuggest.classList.remove('display');
    mobileSuggest.classList.remove('display');
}

modalClose.addEventListener('click', removeSearchResult)
modal.addEventListener('click', removeSearchResult)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})

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