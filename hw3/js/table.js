function makeTable(){
    // Grabs the four form values and converts them to integers.
    var minCol = parseInt(document.getElementById("minColVal").value);
    var maxCol = parseInt(document.getElementById("maxColVal").value);
    var minRow = parseInt(document.getElementById("minRowVal").value);
    var maxRow = parseInt(document.getElementById("maxRowVal").value); 
    var num = 0;
    
    // Creating the div to hold our table
    var tableDiv = document.createElement('div');
    tableDiv.id = "tableDiv";
    document.body.appendChild(tableDiv);

    // Creating the table itself
    var dynTable = document.createElement('table');
    dynTable.id = "dynTable";
    document.getElementById("tableDiv").appendChild(dynTable);

    // Nested for loop that creates a table row and then populates the column
    // associated with it.
    for(var r = minRow; r <= maxRow; r++){
        createTR(r, num);
        for(var c = minCol; c <= maxCol; c++){
            createTD(r, c, num);
        }
        num++;
    }
}

// Creates a new row entry for a table. Sets value to be equal to rowVal, with
// an increasing numerical id tag row[num].
function createTR(rowVal, num){
    var entry = document.createElement('TR');
    entry.id = "row" + num;
    entry.innerHTML = rowVal;
    document.getElementById("dynTable").appendChild(entry);
}

// Creates a new data entry for a table. Sets the value of the entry to be the
// product of the rowVal and colVal. 
function createTD(rowVal, colVal, num){
    var entry = document.createElement('TD');
    entry.innerHTML = rowVal * colVal;
    document.getElementById("row" + num).appendChild(entry);
}