function makeTable() {
    // .valid call checks form, and table only generates if all 
    if($('#inputForm').valid()){
        var temp = 0;
        
        // Grabs the four form values and converts them to integers.
        var minCol = parseInt(document.getElementById("minColVal").value);
        var maxCol = parseInt(document.getElementById("maxColVal").value);
        var minRow = parseInt(document.getElementById("minRowVal").value);
        var maxRow = parseInt(document.getElementById("maxRowVal").value);

        // If the minimum value for the rows/colums exceed their max, swap the
        // two values with each other.
        if(minCol > maxCol){
            temp = maxCol;
            maxCol = minCol;
            minCol = temp;
        }
        
        if(minRow > maxRow){
            temp = maxRow;
            maxRow = minRow;
            minRow = temp;
        }

        // Get the table element
        const table = document.getElementById('table');

        // Clear the table
        table.innerHTML = '';

        // Create the first row (gonna be the column headings)
        const tr_col = document.createElement('tr');
        table.appendChild(tr_col);
        tr_col.appendChild(document.createElement('th'));
        for (let j = minCol; j <= maxCol; j++) {
            const th_col = document.createElement('th');
            th_col.innerHTML = `${j}`;
            tr_col.appendChild(th_col);
        }
        
        // Make each row of the table
        for (let i = minRow; i <= maxRow; i++) {
            const tr = document.createElement('tr');
            table.appendChild(tr);
            
            // Before each row, append the row heading
            const th_row = document.createElement('th');
            th_row.innerHTML = `${i}`

            tr.appendChild(th_row);

            // Make each TD for the table
            for (let j = minCol; j <= maxCol; j++) {
            
                const td = document.createElement('td');
                td.innerHTML = `${i * j}`;
                tr.appendChild(td);
            }
        }
    }
}