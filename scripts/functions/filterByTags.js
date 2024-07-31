import getRecipeDataById from "./getRecipeDataById.js";

const filterByTags = (activeFilters, cardsContainer) => {
  const searchForm = document.getElementById("searchForm");
  const searchValue = searchForm.querySelector("input").value;
  cardsContainer.forEach((card) => {
    const currentRecipe = getRecipeDataById(card.id);
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
};

export default filterByTags;
