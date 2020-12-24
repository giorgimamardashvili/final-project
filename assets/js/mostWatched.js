const wrapper = document.querySelector(".most-watched__wrapper");

for (let i = 0; i < mostWatchedArr.length; i++) {
  const currentItem = mostWatchedArr[i];
  const wrapperItem = document.createElement("div");
  wrapperItem.classList.add("most-watched__item");
  wrapperItem.classList.add("today");
  wrapperItem.classList.add("swiper-slide");
  wrapperItem.classList.add(`${currentItem.value}`);
  wrapperItem.innerHTML = `
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

  wrapper.appendChild(wrapperItem);
}
