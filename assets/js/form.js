const form = document.querySelector(".form");

const persons = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("input_name");
  let email = document.getElementById("input_mail");
  let country = document.getElementById("country");

  let person = {
    name: name.value,
    email: email.value,
    country: country.value,
  };

  persons.push(person);
  console.log(persons);
});
