import getRecipeDataById from "./getRecipeDataById.js";

export default function filterBySearch(searchValue, cardsContainer) {
  console.log("filterBySearch");
  Array.from(cardsContainer).filter((card) => {
    const currentRecipe = getRecipeDataById(card.id);
    if (
      card.style.display !== "none" &&
      (currentRecipe.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        currentRecipe.description
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        currentRecipe.ingredients.some((ingredient) =>
          ingredient.ingredient
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        ) ||
        currentRecipe.appliance
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        currentRecipe.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(searchValue.toLowerCase())
        ))
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
