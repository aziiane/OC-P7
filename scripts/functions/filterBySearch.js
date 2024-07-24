import getRecipeDataById from "./getRecipeDataById.js";

export default function filterBySearch(searchValue, cardsContainer) {
  for (const card of cardsContainer) {
    const currentRecipe = getRecipeDataById(card.id);
    if (
      card.style.display !== "none" &&
      currentRecipe.name.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      card.classList.remove("hidden");
      card.classList.add("block");
    } else {
      card.classList.remove("block");
      card.classList.add("hidden");
    }
  }
}
