function makeTable(){
    // Grabs the four form values and converts them to integers.
    var minCol = parseInt(document.getElementById("minColVal").value);
    var maxCol = parseInt(document.getElementById("maxColVal").value);
    var minRow = parseInt(document.getElementById("minRowVal").value);
    var maxRow = parseInt(document.getElementById("maxRowVal").value);

    var num = 1;
    
    // Creating the div to hold our table
    var tableDiv = document.createElement('div');
    tableDiv.id = "tableDiv";
    document.body.appendChild(tableDiv);

    // Creating the table itself
    var dynTable = document.createElement('table');
    dynTable.id = "dynTable";
    document.getElementById("tableDiv").appendChild(dynTable);

    /*
    Trying to see what works and what doesn't for attempting to create the table.
    Refer to this: https://www.jesseheines.com/~heines/91.461/91.461-2012-13f/461-lecs/code/jmh-table-v1.html?xBegin=1&xEnd=5&yBegin=1&yEnd=5
    for guidance on how I can do the same sort of thing. make sure to inspect the elements.
    */
    var entry;

    for(var i = minRow; i <= maxRow; i++){
        entry = document.createElement('tr');
        document.getElementById("dynTable").appendChild(entry);
    }
    
    var row_list = document.getElementsByTagName('tr');

    entry = document.createElement('td');
    row_list[0].appendChild(entry);

    // creates first row in table, each cell in row contains value starting from minCol and ending at maxCol
    for(var i = minCol; i <= maxCol; i++){
        entry = document.createElement('td');
        entry.innerHTML = i;
        row_list[0].appendChild(entry);
    }
    
    /* 
    for loops to try to populate table with values. 
    *leftmost cell in second row starts with minRow and goes in ascending order per
    row, ending with maxRow. All other cells values are their given colVal * rowVal.
    (NOT DONE)
    */
    for(var i = minCol; i <= maxCol; i++){

        for(var j = 1; j <= row_list.length; j++){
            entry = document.createElement('td');
            entry.innerHTML = i * minRow;
            row_list[].appendChild(entry);
            minRow++;
        }
    }