function addTable() {
    let myTableDiv = document.getElementById("javascriptTable");
  
    let table = document.createElement('table');
  
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    let i = 0
  
    if (i <= 12) {
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
      i++
      }
    }
    myTableDiv.appendChild(table);
};

function buttonClick() {
    addTable()
}
