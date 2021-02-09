let AantalGoed = 0;
let endGame = false;
let beurt = 0;
const playerArray = [];
const gameOverArray = [];
const myTableDiv = document.getElementById("javascriptTable");
const controlTable = document.getElementById("controlTable");
const controlColorArray = [];
const table = document.createElement("table");
const tableBody = document.createElement("tbody");


//deze functie maakt een nieuwe beurt aan.
function addBeurt() {
  if (endGame) return console.log("Game is Over");
    if (beurt < 12) {
      let tr = document.createElement("tr");
      tableBody.appendChild(tr);
      for (let tableLength = 0; tableLength < 7; tableLength++) {
        let td = document.createElement("td");
        tr.appendChild(td);

        if (tableLength == 0) {
          let number = beurt + 1;
          td.appendChild(document.createTextNode(number));
        }

        if (tableLength > 0 && tableLength < 5) {
          let sel = td.appendChild(document.createElement("select"));
          sel.classList.add("row" + beurt);
          sel.classList.add("collumn" + tableLength);
          let opt1 = td.appendChild(document.createElement("option"));
          let opt2 = td.appendChild(document.createElement("option"));
          let opt3 = td.appendChild(document.createElement("option"));
          let opt4 = td.appendChild(document.createElement("option"));
          let opt5 = td.appendChild(document.createElement("option"));

          opt1.value = "1";
          opt1.text = "Blauw";

          opt2.value = "2";
          opt2.text = "Groen";

          opt3.value = "3";
          opt3.text = "Geel";

          opt4.value = "4";
          opt4.text = "Roze";

          opt5.value = "5";
          opt5.text = "Bruin";

          sel.add(opt1);
          sel.add(opt2);
          sel.add(opt3);
          sel.add(opt4);
          sel.add(opt5);
        }
        if (tableLength == 5) {
          let sel = td.appendChild(document.createElement("td"))
          sel.className = ("white" + (beurt))
        }
        if (tableLength == 6) {
          let sel = td.appendChild(document.createElement("td"))
          sel.className = ("red" + (beurt))
        }
      }
      console.log(endGame);
      if (beurt <= 11) {
        beurt++;
      }
    }
    myTableDiv.appendChild(table);
};


//controlfunctie. controleert of de array goed is.                //hier klopt iets niet, kleur veranderd steeds terug naar standaard waarde
function controlFunction(beurt) {
    if (beurt > 0) {
      playerArray.splice(0, playerArray.length);
      controlColorArray.splice(0, playerArray.length);
      for (let classNumber = 0; classNumber < 4; classNumber++) {
        el = parseInt(document.getElementsByClassName("row" + (beurt - 1))[classNumber].value);
        playerArray.push(el);
        if (document.getElementsByClassName("row" + (beurt - 1))[classNumber].value = 1) {
          controlColorArray.push("Aqua")
        } else if (document.getElementsByClassName("row" + (beurt - 1))[classNumber].value = 2) {
          controlColorArray.push("LawnGreen")
        } else if (document.getElementsByClassName("row" + (beurt - 1))[classNumber].value = 3) {
          controlColorArray.push("yellow")
        } else if (document.getElementsByClassName("row" + (beurt - 1))[classNumber].value = 4) {
          controlColorArray.push("LightPink")
        } else if (document.getElementsByClassName("row" + (beurt - 1))[classNumber].value = 5) {
          controlColorArray.push("SandyBrown")
        }
      }
    }
    controlArray = [];
    control = {
      1: 0, //hoeveel white (dus juiste kleur maar niet op juiste plaats)
      2: 0, // hoeveel red (dus juiste kleur op de juiste plek)
    };
    AantalGoed = 0;
    for (ArrayLength = 0; ArrayLength < 4; ArrayLength++) {
      if (
        colorArray[ArrayLength] == playerArray[ArrayLength] &&
        colorArray.includes(playerArray[ArrayLength])
      ) {
        controlArray.push("red");
        control[2] = control[2] + 1;
        AantalGoed++;
      } else if (playerArray.includes(colorArray[ArrayLength])) {
        controlArray.push("white");
        control[1] = control[1] + 1;
      }};
    if (beurt > 0) {

      document.getElementsByClassName("white" + (beurt - 1))[0].innerHTML = control[1];
      document.getElementsByClassName("red" + (beurt - 1))[0].innerHTML = control[2];
      document.getElementsByClassName("white" + (beurt - 1))[0].style.backgroundColor = "ghostWhite"
      document.getElementsByClassName("red" + (beurt - 1))[0].style.backgroundColor = "red"
      document.getElementsByClassName("row" + (beurt - 1))[0].style.backgroundColor = controlColorArray[0]
      document.getElementsByClassName("row" + (beurt - 1))[1].style.backgroundColor = controlColorArray[1]
      document.getElementsByClassName("row" + (beurt - 1))[2].style.backgroundColor = controlColorArray[2]
      document.getElementsByClassName("row" + (beurt - 1))[3].style.backgroundColor = controlColorArray[3]
    };
    if (AantalGoed >= 4) {
      alert(
        "Gefeliciteerd!!! je hebt gewonnen!! De juiste kleurencombinatie was " +
        gameOverArray
      );
      endGame = true;
      return;
    };
    if (beurt == 12 && colorArray !== playerArray) {
      alert(
        "Game Over. De juiste kleurencombinatie was " +
        gameOverArray +
        ". Probeer het eens opnieuw :)"
    )}};

//deze functie maakt een willekeurige combinatie van 4 kleuren aan
function addCombination() {
  colorArray = [];
  colors = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  while (colorArray.length < 4) {
    let random = Math.floor(Math.random() * 5 + 1);
    colorArray.push(random);
    colors[random] = colors[random] + 1;
    if (random == 1) {
      gameOverArray.push("blauw");
    }
    if (random == 2) {
      gameOverArray.push("groen");
    }
    if (random == 3) {
      gameOverArray.push("geel");
    }
    if (random == 4) {
      gameOverArray.push("roze");
    }
    if (random == 5) {
      gameOverArray.push("bruin");
    }
  }
};

//dit is de eventlistner voor de knop en roept 2 functies aan.
document.getElementById("button").onclick = function () {
  controlFunction(beurt);
  addBeurt();
};

//hier start het script
addCombination();
table.appendChild(tableBody);
console.log(colorArray);


/* 1 = blue
2 = green
3 = yellow
4 = pink
5 = brown */
