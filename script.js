function createTable() {
    let rn = window.prompt("Input number of rows");
    let cn = window.prompt("Input number of columns");

    let table = document.getElementById('myTable');

    for(let r = 0; r < parseInt(rn, 10); r++){
        let row = table.insertRow(r);
        for(let c = 0; c < parseInt(cn, 10); c++){
            let cell = row.insertCell(c);
            cell.innerHTML = "Row-" + r + " Column-" + c;
        }
    }
}