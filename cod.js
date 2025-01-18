let btnNext = document.querySelector(".next")
let btnBack = document.querySelector(".back")


let container = document.querySelector(".container");
let container2 = document.querySelector(".container .mini-container");
let cardAll = document.querySelector(".container .mini-container .allCards");

console.log(btnNext)

btnNext.onclick = () => moveCardOnClick("next");
btnBack.onclick = () => moveCardOnClick("back");

function moveCardOnClick(type) {
    let cards = document.querySelectorAll(".cards");
    console.log(cards)

    if (type === "next") {
        cardAll.appendChild(cards[0]);
        container.classList.add("next");
    }
    else {
        cardAll.prepend(cards[cards.length - 1]);
        container.classList.add("back");
    }

    setTimeout(() => {
        container.classList.remove("next");
        container.classList.remove("back");
    }, 500);
}