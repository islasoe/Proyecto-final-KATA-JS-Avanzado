function showPlayers(pokemon) {
  //Seleccionar el contenedor
  const main = document.querySelector("main");

  //Contenedor principal
  var flipCard = document.createElement("div");
  flipCard.className = "flip-card my-1";
  main.appendChild(flipCard);

  //Contenedor principal
  var flipCardInner = document.createElement("div");
  flipCardInner.className = "flip-card-inner";
  flipCard.appendChild(flipCardInner);

  //Crear el poke card front
  var pokeCardFront = document.createElement("div");
  pokeCardFront.className =
    "card col-3 bg-primary m-1 flip-card-front d-flex align-items-center justify-content-center";
  flipCardInner.appendChild(pokeCardFront);

  // nombre del jugador en la principal (cara frontal)
  let pokeNombreFront = document.createElement("h3");
  pokeNombreFront.innerHTML = pokemon.name;
  pokeNombreFront.className = "card-title text-center";
  pokeCardFront.appendChild(pokeNombreFront);

  //Crear el poke card back
  var pokeCard = document.createElement("div");
  pokeCard.className = "card col-3 bg-info m-1 px-2 flip-card-back";
  flipCardInner.appendChild(pokeCard);

  //Crear titulo de pokemon
  let pokeNombre = document.createElement("h3");
  pokeNombre.innerHTML = pokemon.name;
  pokeNombre.className = "card-title text-center";
  pokeCard.appendChild(pokeNombre);

  //Crear jersey
  let pokeJersey = document.createElement("p");
  pokeJersey.innerHTML = `N° jersey ${pokemon.jersey} ()`;
  pokeJersey.className = "card-text text-center jersey ";
  pokeCard.appendChild(pokeJersey);

  // crear abbr_name
  let pokerAbbr_name = document.createElement("p");
  pokerAbbr_name.innerHTML = `Abbr Name: ${pokemon.abbr_name}`;
  pokerAbbr_name.className = "card-text";
  pokeCard.appendChild(pokerAbbr_name);

  // crear preferred_name
  let pokerpreferred_name = document.createElement("p");
  pokerpreferred_name.innerHTML = `Preferred Name: ${pokemon.preferred_name}`;
  pokerpreferred_name.className = "card-text";
  pokemon.preferred_name != undefined ? pokeCard.appendChild(pokerpreferred_name) : null;

  // crear birth_date
  let pokerbirth_date = document.createElement("p");
  pokerbirth_date.innerHTML = `Birth Date: ${pokemon.birth_date}`;
  pokerbirth_date.className = "card-text";
  pokemon.birth_date != undefined ? pokeCard.appendChild(pokerbirth_date) : null;

  // crear weight
  let pokerweight = document.createElement("p");
  pokerweight.innerHTML = `Weight: ${pokemon.weight}`;
  pokerweight.className = "card-text";
  pokemon.weight != undefined ? pokeCard.appendChild(pokerweight) : null;

  // crear height
  let pokerheight = document.createElement("p");
  pokerheight.innerHTML = `Height: ${pokemon.height}`;
  pokerheight.className = "card-text";
  pokemon.height != undefined ? pokeCard.appendChild(pokerheight): null;

  // crear position
  let pokerposition = document.createElement("p");
  pokerposition.innerHTML = `Position: ${pokemon.position}`;
  pokerposition.className = "card-text";
  pokemon.position != undefined ? pokeCard.appendChild(pokerposition) : null;

  // crear birth_place
  let pokerbirth_place = document.createElement("p");
  pokerbirth_place.innerHTML = `Birth Place: ${pokemon.birth_place}`;
  pokerbirth_place.className = "card-text";
  pokemon.birth_place != undefined ? pokeCard.appendChild(pokerbirth_place) : null ;

  // crear high_school
  let pokerhigh_school = document.createElement("p");
  pokerhigh_school.innerHTML = `High School: ${pokemon.high_school}`;
  pokerhigh_school.className = "card-text";
  pokemon.high_school != undefined ? pokeCard.appendChild(pokerhigh_school): null;

  // crear college
  let pokercollege = document.createElement("p");
  pokercollege.innerHTML = `College: ${pokemon.college}`;
  pokercollege.className = "card-text";
  pokemon.college != undefined ? pokeCard.appendChild(pokercollege):null;

  // crear college_conf
  let pokercollege_conf = document.createElement("p");
  pokercollege_conf.innerHTML = `College Conf: ${pokemon.college_conf}`;
  pokercollege_conf.className = "card-text";
  pokemon.college_conf != undefined ? pokeCard.appendChild(pokercollege_conf):null;

  // crear rookie_year
  let pokerrookie_year = document.createElement("p");
  pokerrookie_year.innerHTML = `Rookie Year: ${pokemon.rookie_year}`;
  pokerrookie_year.className = "card-text";
  pokemon.rookie_year != undefined ? pokeCard.appendChild(pokerrookie_year):null;

  // crear status
  let pokerstatus = document.createElement("p");
  pokerstatus.innerHTML = `Status: ${pokemon.status}`;
  pokerstatus.className = "card-text";
  pokemon.status != undefined ? pokeCard.appendChild(pokerstatus):null;

}

listPlayers.players.forEach((item) => {
  console.log(item);
  showPlayers(item);
});
