let playerArray = [1, 4, 3, 4]
console.log(playerArray)
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
      i++
      } // einde van de table create
      controlArray = [];
      control = {
        1: 0,
        2: 0
      }

      // dit stukje code werkt niet goed. Kan ook aan de colorArray liggen.
      for (h = 0; h < 4; h++) {
        if (playerArray.includes(colorArray[h])) {
          controlArray.push("white")
          control[1] = control[1] + 1;
          console.log(colorArray[h]);
        } else if (colorArray[h] = playerArray[h]) {
          controlArray.push("red");
          control[2] = control[2] + 1;
        } else {
        console.log("niks");
        }
      }
      console.log(control)
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






addTable();
addCombination();


/* 1 = blue 
2 = green
3 = yellow
4 = pink
5 = brown */

