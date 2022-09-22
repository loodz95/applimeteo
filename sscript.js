let bouton = document.getElementById("bouton");
let nomVille = document.getElementById("nomVille");

bouton.addEventListener("click", click);
function click() {
  let userchoice;
  userchoice = nomVille.value;

  fetch(`https://www.prevision-meteo.ch/services/json/${userchoice}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let userchoice = nomVille;
      let name = document.getElementById("name");
      name.innerHTML = data.city_info.name;
      let etat = document.getElementById("etat");
      etat.innerHTML = data.current_condition.condition;
      let degres = document.getElementById("degres");
      degres.innerHTML = data.current_condition.tmp;
      let image = document.getElementById("image");
      image.innerHTML = `<img src=${data.current_condition.icon_big} />`;
    });
}
