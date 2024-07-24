function createTable() {
    //Write your code here
	rn = window.prompt("Input number of rows", 1);
	cn = window.prompt("Input number of column", 1);

	for(let r = 0; r<parseInt(rn,10); r++){
		let x = document.getElementById('myTable').insertRow(r);
		for(let c = 0; c < parseInt(cn,10);c++)
			{
				let y = x.insertCell(c);
				y.innerHTML = "Row-"+r+"column-"+c;
			}
	}
  
}
