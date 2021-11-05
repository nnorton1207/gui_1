var list = document.getElementsByTagName("ul");
var list_elements = document.getElementsByTagName("li");

var cream = document.createElement("li");
var kale = document.createElement("li");

var total = 0;

// ADD NEW ITEM TO END OF LIST
cream.appendChild(document.createTextNode("cream"));
list[0].appendChild(cream);

// ADD NEW ITEM START OF LIST
kale.appendChild(document.createTextNode("kale"));
list[0].insertBefore(kale, list_elements[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for(var i = 0; i < list_elements.length; i++)
    list_elements[i].classList.add("cool");

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
for(var i = 0; i < list_elements.length; i++)
    total++;
document.getElementsByTagName("h2")[0].textContent = "Buy groceries (" + total + ")";