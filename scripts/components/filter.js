import { cardManager } from "../index.js";
import tags from "./tags.js";

export default class Filter {
  constructor(label, items, activeFilter = []) {
    this.label = label;
    this.items = items;
    const filterSection = document.querySelector("#filters");
    this.filterDropdown = document.createElement("div");
    this.filterDropdown.classList.add("filter-dropdown");

    this.filterButton = document.createElement("button");
    this.filterButton.id = `${this.label}-filter`;
    this.filterButton.innerHTML = `${this.label} <img src="/public/icons/arrow-bottom.svg" />`;

    this.filterButton.addEventListener("click", () =>
      this.filterDropdown.classList.toggle("active-filter")
    );

    this.filterDropdown.appendChild(this.filterButton);

    //Filter search input
    const filterSearch = document.createElement("input");
    filterSearch.type = "text";
    filterSearch.placeholder = `Rechercher un ${this.label}`;
    filterSearch.classList.add("filter-search");
    this.filterDropdown.appendChild(filterSearch);

    //Filter List
    const filterList = document.createElement("ul");
    for (const item of this.items) {
      const filterOption = document.createElement("li");
      const filterCheckBox = document.createElement("input");
      const filterLabel = document.createElement("label");
      filterOption.addEventListener("click", (e) => {
        filterCheckBox.checked = !filterCheckBox.checked;
      });
      //LABEL
      filterLabel.htmlFor = item;
      filterLabel.textContent = item;
      filterLabel.classList.add("filter-label");
      //CheckBox
      filterCheckBox.type = "checkbox";
      filterCheckBox.value = item;
      filterCheckBox.id = item;
      filterCheckBox.classList.add("filter-checkbox");

      filterCheckBox.addEventListener("change", (e) => {
        const searchForm = document.getElementById("searchForm");
        const searchValue = searchForm.querySelector("input").value;
        new Promise((resolve) => {
          if (e.target.checked) {
            activeFilter.push(e.target.value);
            filterOption.style.backgroundColor = "#FFD15B";
            resolve();
          } else if (e.target.checked === false) {
            activeFilter.splice(activeFilter.indexOf(e.target.value), 1);
            filterOption.style.backgroundColor = "initial";
            resolve();
          }
        }).then(() => {
          tags(activeFilter);
          cardManager.filterCards(activeFilter, searchValue);
        });
      });
      //Append
      filterOption.appendChild(filterCheckBox);
      filterOption.appendChild(filterLabel);
      filterList.appendChild(filterOption);
    }
    this.filterDropdown.appendChild(filterList);

    filterSearch.addEventListener("input", (e) => {
      filterList.childNodes.forEach((item) => {
        if (
          item.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          item.classList.remove("hidden");
          item.classList.add("block");
        } else {
          item.classList.remove("block");
          item.classList.add("hidden");
        }
      });
    });

    filterSection.appendChild(this.filterDropdown);
  }
}

{
  /* <div id="ustensil-filters" class="filter-dropdown">
<button class="btn">
  Ustensils <img src="/public//icons/arrow-bottom.svg" />
</button>
</div> */
}
