const viewAllc = document.getElementById("collectionView");
const collectionItems = document.querySelector(".collection__items");

let countC = 0;

const Collection = (counter) => {
  for (let i = counter; i <= counter + 6; i++) {
    if (i === counter + 6) {
      countC = counter + 6;
      break;
    }

    const currentItem = collectionArr[i];
    const collectionItem = document.createElement("div");
    collectionItem.classList.add("collection__item");
    collectionItem.innerHTML = `
    
                <img src="${currentItem.image}" alt="">
                <a href=""><span>${currentItem.name}</span></a>

    `;

    collectionItems.appendChild(collectionItem);
  }
};

Collection(countC);
// console.log(showMovies(count));

viewAllc.addEventListener("click", () => {
  Collection(countC);
});
