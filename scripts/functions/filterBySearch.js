import getRecipeDataById from "./getRecipeDataById.js";

export default function filterBySearch(searchValue, cardsContainer) {
  for (const card of cardsContainer) {
    const currentRecipe = getRecipeDataById(card.id);
    if (
      card.style.display !== "none" &&
      currentRecipe.name.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}
