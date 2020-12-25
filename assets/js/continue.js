const continueWatch = document.querySelector(".continue-watching__carousel");

for (let i = 0; i < continueArr.length; i++) {
  const currentItem = continueArr[i];
  const continueItem = document.createElement("div");
  continueItem.classList.add("continue-watching__item");
  continueItem.classList.add("carousel__item");
  continueItem.innerHTML = `
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

  continueWatch.appendChild(continueItem);
}
