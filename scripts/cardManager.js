import filterBySearch from "./functions/filterBySearch.js";
import filterByTags from "./functions/filterByTags.js";

export default class CardManager {
  constructor() {
    this.cardsContainer = document.querySelector("#recette-cards");
  }

  countDisplayedCards() {
    let acc = 0;
    this.cardsContainer.childNodes.forEach(
      (node) => node.style.display !== "none" && acc++
    );
    const recetteCountContainer = document
      .querySelector("#recette-count")
      .querySelector("span");
    return (recetteCountContainer.innerText = acc);
  }

  filterCards(activeFilters, searchValue = "") {
    filterByTags(activeFilters, this.cardsContainer.childNodes);
    filterBySearch(searchValue, this.cardsContainer.childNodes);

    this.countDisplayedCards();
    return
  }
}
