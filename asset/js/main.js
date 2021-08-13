//Card 01
function changePic1() {
  document.getElementById("myImg01").src = "img/kelvin_joseph_02.jpg";
}
function changePic2() {
  document.getElementById("myImg01").src = "img/kelvin_joseph.jpeg";
}
//Card 02
function changePic3() {
  document.getElementById("myImg02").src = "img/leighton-vander-esch_02.jpg";
}
function changePic4() {
  document.getElementById("myImg02").src = "img/leighton-vander-esch.jpeg";
}

//Card 03

function changePic5() {
  document.getElementById("myImg03").src = "img/dan_quinn_02.jpg";
}
function changePic6() {
  document.getElementById("myImg03").src = "img/dan_quinn.jpg";
}

//Card MB 01

function changePic7() {
  document.getElementById("myImg04").src = "img/osa_odighizuwa_02.jpg";
}
function changePic8() {
  document.getElementById("myImg04").src = "img/osa_odighizuwa.jpg";
}

//Card MB 02

function changePic9() {
  document.getElementById("myImg05").src = "img/antwaun_woods_02.jpeg";
}
function changePic10() {
  document.getElementById("myImg05").src = "img/antwaun_woods.jpeg";
}

//Card MB 03

function changePic11() {
  document.getElementById("myImg06").src = "img/jabril_cox_02.jpeg";
}
function changePic12() {
  document.getElementById("myImg06").src = "img/jabril_cox.jpeg";
}

//Dark Mode

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const buttonGET = document.getElementById("buttonGET");

buttonGET.onclick = () => {
  console.log("typeof(items)");
  console.log(typeof items);
  console.log(items);
  items.conferences.forEach((element) => {
    console.log("element");
    console.log(element);
    console.log(typeof element);
    element.divisions.forEach((items) => {
      // console.log(item['name'])
      if (items["id"] == "6dab3ca1-b9cb-403f-91dd-b2a3708ab060") {
        console.log(items);
        var table = document.getElementById("myTable");
        let i = 1;
        items.teams.forEach((item) => 
        {
          console.log(item)
          // Object.entries(item).forEach(([key, value]) => {
            // console.log(key, value);
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            cell1.innerHTML = i;
            cell2.innerHTML = item['name'];
            cell3.innerHTML = item['wins'];
            cell4.innerHTML = item['losses'];
            cell5.innerHTML = item['ties'];
            cell6.innerHTML = item['win_pct'];

            // cell3.innerHTML = value["saldo"];
            i += 1;
          // });
        })

      }
    });
  });
};

// btn de obtener el rancho
const buttonGETRancho = document.getElementById("buttonGETRancho");

buttonGETRancho.onclick = () => {
  console.log("buttonGETRancho onClick");
  let divRancho = document.getElementById("teamRancho");
  console.log(divRancho)
  
  listPlayers.players.forEach((item) => {
    console.log(item)
    
  // DOM del Item
  let newDivCard = document.createElement("div");
  newDivCard.classList.add("card");
  let newDivCardBody = document.createElement("div");
  newDivCardBody.classList.add("card-body")
  let newCardTitle = document.createElement("h5");
  newCardTitle.classList.add("card-title")
  
  let newCardText0 = document.createElement("p");
  newCardText0.classList.add("card-text")
  let newCardTxt = document.createTextNode("xxxxx")
  newCardText0.appendChild(newCardTxt)

  let newCardText1 = document.createElement("p");
  newCardText1.classList.add("card-text")
  let newCardTxt1 = document.createTextNode("xxxxx")
  newCardText1.appendChild(newCardTxt1)

  newDivCardBody.appendChild(newCardTitle)
  newDivCardBody.appendChild(newCardText0)
  newDivCardBody.appendChild(newCardText1)
  newDivCard.appendChild(newDivCardBody)
  divRancho.appendChild(newDivCard)
  



  })
};


// funcion para leer data de estadisticas
function myFunctionLoad() {}

// DEVF