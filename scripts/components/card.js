export default class Card {
  constructor(recipe) {
    this.recipe = recipe;
    this.cardsContainer = document.querySelector("#recette-cards");

    // Create the card
    this.card = document.createElement("div");
    this.card.classList.add("recette-card");
    this.card.id = this.recipe.id;

    // Create the card header + append it to the card
    this.cardHeader = document.createElement("div");
    this.cardHeader.classList.add("card-header");
    this.card.appendChild(this.cardHeader);

    this.cardImage = document.createElement("img");

    
    // Create the card body + append it to the card
    this.cardBody = document.createElement("div");
    this.cardBody.classList.add("card-body");
    this.card.appendChild(this.cardBody);


    this.cardsContainer.appendChild(this.card);
  }
  setRecipeTitle() {
    // Create the recipe title + append it to the card body
    this.cardTitle = document.createElement("h3");
    this.cardTitle.classList.add("card-title");
    this.cardTitle.textContent = this.recipe.name;
    this.cardBody.appendChild(this.cardTitle);
  }
  setRecipeImage() {
    // Create the recipe image + append it to the card header
    this.cardImage.src = `/public/recettes/${this.recipe.image}`;
    this.cardImage.alt = "recette image";
    this.cardHeader.appendChild(this.cardImage);
  }
  setRecipeTime() {
    // Create the recipe time tag + append it to the card header
    this.cardTimeTag = document.createElement("div");
    this.cardTimeTag.classList.add("card-time-tag");
    this.cardTimeTag.textContent = `${this.recipe.time} min`;
    this.cardHeader.appendChild(this.cardTimeTag);
  }
  setRecipeDescription() {
    // Create the recipe description + append it to the card body
    this.cardDescriptionContainer = document.createElement("div");
    this.cardDescriptionSubtitle = document.createElement("div");
    this.cardDescriptionDescription = document.createElement("div");
    this.cardDescriptionSubtitle.textContent = "Recette";
    this.cardDescriptionDescription.textContent = this.recipe.description;
    this.cardDescriptionSubtitle.classList.add("card-subtitles");
    this.cardDescriptionDescription.classList.add("card-description");
    this.cardDescriptionContainer.classList.add("card-description-container");
    this.cardDescriptionContainer.appendChild(this.cardDescriptionSubtitle);
    this.cardDescriptionContainer.appendChild(this.cardDescriptionDescription);
    this.cardBody.appendChild(this.cardDescriptionContainer);
  }
  setRecipeIngredients() {
    // Create the recipe ingredients + append it to the card body
    this.cardIngredientsContainer = document.createElement('div');
    this.cardIngredientsContainer.classList.add('card-ingredients');
    this.cardIngredientsSubtitle = document.createElement('div');
    this.cardIngredientsSubtitle.classList.add('card-subtitles');
    this.cardIngredientsSubtitle.id = "ingredient";
    this.cardIngredientsSubtitle.textContent = "Ingrédients";
    this.cardIngredientsContainer.appendChild(this.cardIngredientsSubtitle);

    for (const ingredient of this.recipe.ingredients) {
      this.cardIngredientAndQuantity = document.createElement('div');
      this.cardIngredientAndQuantity.classList.add('ingredient-quantity');
      this.ingredientName = document.createElement('p');
      this.ingredientName.classList.add('ingredient');
      this.ingredientQuantity = document.createElement('p');
      this.ingredientQuantity.classList.add('quantity');
      this.ingredientName.textContent = ingredient.ingredient;
      this.ingredientQuantity.textContent = `${ingredient.quantity || "-"} ${ingredient.unit || ""}`;
      this.cardIngredientAndQuantity.appendChild(this.ingredientName);
      this.cardIngredientAndQuantity.appendChild(this.ingredientQuantity);
      this.cardIngredientsContainer.appendChild(this.cardIngredientAndQuantity);
    }

    this.cardBody.appendChild(this.cardIngredientsContainer);
  }
  removeCard() {
    this.card.remove();
  }
}
