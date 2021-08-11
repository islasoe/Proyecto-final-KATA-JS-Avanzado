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
  items.conferences.forEach((element) => {
    console.log("element");
    console.log(element);
    console.log(typeof element);
    element.divisions.forEach((item) => {
      // console.log(item['name'])
      if (item["id"] == "6dab3ca1-b9cb-403f-91dd-b2a3708ab060") {
        console.log(item);
        var table = document.getElementById("myTable");
        let i = 1;
        Object.entries(item).forEach(([key, value]) => {
          console.log(key, value);
          var row = table.insertRow(i);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          cell1.innerHTML = i;
          cell2.innerHTML = element['name'];
          // cell3.innerHTML = value["saldo"];
          i += 1;
        });
      }
    });
  });
};

function myFunction() {}
