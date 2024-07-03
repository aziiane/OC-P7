import { recipes } from "../recipes.js";

export default class CardManager {
  constructor() {
    this.cardsContainer = document.querySelector("#recette-cards");
  }

  countDisplayedCards() {
    let acc = 0
    this.cardsContainer.childNodes.forEach((node) => node.style.display !== "none" && acc++);
    const recetteCountContainer = document
      .querySelector("#recette-count")
      .querySelector("span");
    console.log(acc);
    return (recetteCountContainer.innerText = acc);
  }

  filterCards(activeFilters) {
    this.cardsContainer.childNodes.forEach((card) => {
      const currentRecipe = recipes.find(
        (recipe) => recipe.id.toString() === card.id
      );

      if (
        activeFilters.every(
          (filter) =>
            currentRecipe.ingredients.some((ingredient) =>
              ingredient.ingredient.toLowerCase().includes(filter.toLowerCase())
            ) ||
            currentRecipe.appliance
              .toLowerCase()
              .includes(filter.toLowerCase()) ||
            currentRecipe.ustensils.some((ustensil) =>
              ustensil.toLowerCase().includes(filter.toLowerCase())
            )
        )
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    this.countDisplayedCards()
  }
}
