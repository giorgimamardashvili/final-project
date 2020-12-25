const viewAlls = document.getElementById("new-seriesView");
const nsCarousel = document.querySelector(".new-series__carousel");

let countS = 0;

const newSeries = (counter) => {
  for (let i = counter; i <= counter + 4; i++) {
    if (i === counter + 4) {
      countS = counter + 4;
      break;
    }

    const currentItem = newSeriesArr[i];
    const nsItem = document.createElement("div");
    nsItem.classList.add("new-series__item");
    nsItem.classList.add("carousel__item");
    nsItem.innerHTML = `
                      <div class="carousel__top">
                          <img src="${currentItem.image}" alt="">
                          <div class="season-time"><span class="season-time__text">${currentItem.season}</span></div>
                      </div>
                      <div class="carousel__bottom">
                          <div class="carousel__text">
                              <h3>${currentItem.name}</h3>
                              <span>${currentItem.year}</span>
                          </div>
                      
                      </div>
                      <div class="hover">
                          <div class="hover__img">
                              <a href=""><img src="./assets/images/watch-btn.png" alt=""></a>
                          </div>
                          <div class="hover__icons">
                              <a href=""><img src="./assets/images/icons/Path 20.svg" alt=""></a>
                              <a href=""><img src="./assets/images/icons/Path 18.svg" alt=""></a>
                          </div>
                      </div>
          
          
        `;

    nsCarousel.appendChild(nsItem);
  }
};

newSeries(countS);
// console.log(showMovies(count));

viewAlls.addEventListener("click", () => {
  newSeries(countS);
});
