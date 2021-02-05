// CR :: try using const and let properly
let playerArray = [];
let gameOverArray = [];

// CR :: Try to better describe your variables
let x = 0;
let m = false;

// CR :: You can make this shorter, try to refactor this code - ask for help if needed
function addTable() {
  let myTableDiv = document.getElementById("javascriptTable");

  let table = document.createElement("table");

  let tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  i = 0;

  document.getElementById("button").onclick = function () {
    controlFunction(i);

    if (m) return console.log();
    if (i < 12) {
      let tr = document.createElement("tr");
      tableBody.appendChild(tr);
      for (let j = 0; j < 5; j++) {
        let td = document.createElement("td");
        tr.appendChild(td);
        if (j > 0) {
          let sel = td.appendChild(document.createElement("select"));
          sel.classList.add("row" + i);
          sel.classList.add("collumn" + j);
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
        if (j == 0) {
          let number = i + 1;
          td.appendChild(document.createTextNode(number));
        }
      }
      console.log(m);
      if (i <= 11) {
        i++;
      }
    }
    myTableDiv.appendChild(table);
    //alert("Dit is Ronde " + (i + 1));
  }; // einde van de table create
  //dit is de controlfunctie. ik weet dat het niet mooi is maar het werkt zo. ik had liever deze functie op lijn 18 uitgeschreven.
  function controlFunction(i) {
    const testArray = [];

    if (i > 0) {
      for (let t = 0; t < 4; t++) {
        el = parseInt(document.getElementsByClassName("row" + (i - 1))[t].value);
        testArray.push(el);
      }
    }
    playerArray = testArray;
    // dit is het einde van playerarray
    controlArray = [];
    control = {
      1: 0, //hoeveel white (dus juiste kleur maar niet op juiste plaats)
      2: 0, // hoeveel red (dus juiste kleur op de juiste plek)
    };
    x = 0;
    for (h = 0; h < 4; h++) {
      if (
        colorArray[h] == playerArray[h] &&
        colorArray.includes(playerArray[h])
      ) {
        controlArray.push("red");
        control[2] = control[2] + 1;
        x++;
      } else if (playerArray.includes(colorArray[h])) {
        controlArray.push("white");
        control[1] = control[1] + 1;
      }
    }
    if (x >= 4) {
      alert(
        "Gefeliciteerd!!! je hebt gewonnen!! De juiste kleurencombinatie was " +
        gameOverArray
      );
      m = true;
      return;
    }
    if (i > 0) {
      document.getElementById("one").innerHTML = control[1];
      document.getElementById("two").innerHTML = control[2];
      document.getElementById("controleHeader").innerHTML =
        "Controletabel beurt " + i;
    }
    if (i == 12 && colorArray !== playerArray) {
      alert(
        "Game Over. De juiste kleurencombinatie was " +
        gameOverArray +
        ". Probeer het eens opnieuw :)"
      );
    }
  } //einde controlefunctie
}

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
}

addCombination();
addTable();
console.log(colorArray);

/* 1 = blue
2 = green
3 = yellow
4 = pink
5 = brown */
