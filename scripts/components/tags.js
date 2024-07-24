import { cardManager } from "../index.js";

export default function tags(activeFilters) {
  const tagSection = document.querySelector("#tags-section");
  tagSection.innerHTML = "";
  const searchForm = document.getElementById("searchForm");
  const searchValue = searchForm.querySelector("input").value;
  for (const activeFilter of activeFilters) {
    if (activeFilter !== undefined) {
      const tags = document.createElement("div");
      tags.classList.add("tag");
      tags.innerHTML = `<p>${activeFilter}</p><img src="/public/icons/cross.svg" />`;
      tagSection.appendChild(tags);
      tags.querySelector('img').addEventListener("click", (e) => {
        const tag = e.target.closest(".tag");
        // const tagContent = tag.querySelector('p').innerText;
        // console.log(document.getElementById(tagContent))
        tag.remove();
        activeFilters.splice(activeFilter.indexOf(e.target.value), 1);
        cardManager.filterCards(activeFilters, searchValue);
      });
    }
  }
}
