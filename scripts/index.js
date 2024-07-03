import { recipes } from "../recipes.js";
import CardManager from "./cardManager.js";
import Card from "./components/card.js";
import Filter from "./components/filter.js";
export const cardManager = new CardManager();
async function init() {
  console.log("Initializing the app scripts...");
  var activeFilter = [];
  var ingredient = [];
  var appareil = [];
  var ustensil = [];
  for (const recipe of recipes) {
    ingredient = new Set([...ingredient, ...recipe.ingredients.map(ingredient => ingredient.ingredient)]);
    appareil = new Set([...appareil, recipe.appliance]);
    ustensil = new Set([...ustensil, ...recipe.ustensils]);
    const newRecipe = new Card(recipe);
    newRecipe.setRecipeTitle();
    newRecipe.setRecipeImage();
    newRecipe.setRecipeTime();
    newRecipe.setRecipeDescription();
    newRecipe.setRecipeIngredients();
  }
  new Filter("Ingredients", ingredient, activeFilter);
  new Filter("Appareil", appareil, activeFilter);
  new Filter("Ustensil", ustensil, activeFilter);
  cardManager.countDisplayedCards();

}
init();
