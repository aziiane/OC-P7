import { recipes } from "../../recipes.js";

export default function getRecipeDataById(id) {
  return recipes.find((recipe) => recipe.id.toString() === id);
}
