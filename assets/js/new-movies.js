const viewAllm = document.getElementById("new-moviesView");
const nmCarousel = document.querySelector(".new-movies__carousel");

let countM = 0;

const newMovies = (counter) => {
  for (let i = counter; i <= counter + 4; i++) {
    if (i === counter + 4) {
      countM = counter + 4;
      break;
    }

    const currentItem = newMoviesArr[i];
    const nmItem = document.createElement("div");
    nmItem.classList.add("new-movies__item");
    nmItem.classList.add("carousel__item");
    nmItem.innerHTML = `
                      <div class="carousel__top">
                          <img src="${currentItem.image}" alt="">
                      
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

    nmCarousel.appendChild(nmItem);
  }
};

newMovies(countM);
// console.log(showMovies(count));

viewAllm.addEventListener("click", () => {
  newMovies(countM);
});
