let playerArray = []
function addTable() {
    let myTableDiv = document.getElementById("javascriptTable");
  
    let table = document.createElement('table');
  
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    i = 0
    document.getElementById('button').onclick = function() {
      if (i < 12) {
      let tr = document.createElement('tr');
      tableBody.appendChild(tr);
      for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
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
            opt1.text = "Blue";

            opt2.value = "2";
            opt2.text = "Green";

            opt3.value = "3";
            opt3.text = "Yellow";

            opt4.value = "4";
            opt4.text = "Pink";

            opt5.value = "5";
            opt5.text = "Brown";

            sel.add(opt1);
            sel.add(opt2);
            sel.add(opt3);
            sel.add(opt4);
            sel.add(opt5);
            
        }
        if (j == 0) {
            let number = (i + 1);
            td.appendChild(document.createTextNode(number))
        }
      }
      //alert("Dit is Ronde " + (i + 1));
      } // einde van de table create
      controlArray = [];
      control = {
        1: 0, //hoeveel white (dus juiste kleur maar niet op juiste plaats)
        2: 0 // hoeveel red (dus juiste kleur op de juiste plek)
      }

      for (h = 0; h < 4; h++) {
        if (colorArray[h] == playerArray[h]) {
          controlArray.push("red");
          control[2] = control[2] + 1;
        } else if (playerArray.includes(colorArray[h])) {
          controlArray.push("white")
          control[1] = control[1] + 1;
        } else {
          document.getElementById("one").innerHTML = 0;
          document.getElementById("two").innerHTML = 0;
        }
      }
      if (i > 0) {
        document.getElementById("one").innerHTML = control[1];
        document.getElementById("two").innerHTML = control[2];
        document.getElementById("controleHeader").innerHTML = "Controletabel beurt " + i;
      }
      const testArray = []

      for (let t = 0; t < 4; t++) {
        let row = "row" + [i-0] // deze werkt wel met + i maar niet + i - 1..
        el = document.getElementsByClassName(row)[t].value;
        testArray.push(el);
        }
      console.log(testArray)
      playerArray = testArray;

      if(i <= 11) {
       i++;
      }
    }
    myTableDiv.appendChild(table);
};

function addCombination() {
  colorArray = [];
    colors = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };
    while(colorArray.length < 4) {
        let random = Math.floor((Math.random() * 5) + 1);
        colorArray.push(random);
        colors[random] = colors[random] + 1
  }
console.log(colorArray)
}

addCombination();
addTable();



/* 1 = blue 
2 = green
3 = yellow
4 = pink
5 = brown */
