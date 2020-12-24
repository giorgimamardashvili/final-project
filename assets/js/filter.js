// function sort() {
//   const buttons = document.querySelectorAll(".btns");
//   const items = document.querySelectorAll(".most-watched__item");

//   function filter(category, items) {
//     items.forEach((item) => {
//       const isItemFiltered = !item.classList.contains(category);
//       if (isItemFiltered) {
//         item.classList.add("hide");
//       } else {
//         item.classList.remove("hide");
//       }
//     });
//   }

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const currentCategory = button.dataset.filter;
//       filter(currentCategory, items);
//     });
//   });
// }

// sort();
