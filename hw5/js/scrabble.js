/*
    Name: Noah Norton
    File: scrabble.js
    Date created: 12/14/21
    Assignment: hw5
    About: This file contains all the functions needed for the logic of my
        scrabble game. 
*/

// global variable which stores the data parsed from the JSON file.
var json;

// Enables the tiles to be dragged around 
function makeDraggable(){
    $(function() {
        $( ".ui-widget-content" ).draggable({
            revert: true,
            scroll: false,
            helper: "clone",
            opacity: 0.50
        });
    });  
}

$(function() {
    $("#board .ui-widget-header").droppable({
        tolerance: "pointer",

        drop: function(event, ui) {
            alert("Dropped " + ui.draggable.attr('letter'));
            alert("Score multiplier: " + $(this).attr('multi'));
        }
    })
});

// Incomplete: only refills tile rack, does not do any score computation or
// replenish only missing tiles.
$("#next_word").on("click", function(){
    fillTileRack();
});

// Reset button that will restock the tile bag and give the user a new set of tiles.
$("#reset").on("click", function(){
    $.getJSON("graphics/pieces.json", function(data) {
        json = data;
        fillTileRack();
    });
});

// This function populates an array with all the letters in the tile bag, using 
// the JSON file with all the letter data. It then picks a random letter, and 
// returns it.
function getScrabbleLetter(){
    var pieces = [];
    for (var i = 0; i < json.pieces.length; i++){
        for (var j = 0; j < +json.pieces[i].amount; j++){
            pieces.push(json.pieces[i]);
        }
    }
    if(pieces.length == 0){
        return;
    }

    var randNum = Math.floor(Math.random() * pieces.length);
    var chosenPiece = pieces[randNum];
    
    for(var i = 0; i < json.pieces.length; i++){
        if (json.pieces[i].letter == chosenPiece.letter){
            json.pieces[i].amount--;
            break;
        }
    }
    
    return chosenPiece;
}

// Uses the getScrabbleLetter function to populate the tile rack using jquery.
function fillTileRack() {
    $("#tile_rack").empty();

    for(var i = 0; i < 7; i++){
        var piece = getScrabbleLetter();
        if(piece === undefined){
            break;
        }

        $("<img/>", {
            src: "./graphics/tiles/Scrabble_Tile_" + piece.letter + ".jpg",
            letter: piece.letter,
            value: piece.value,
            class: "ui-widget-content"
        }).appendTo("#tile_rack");
    }
    makeDraggable();
}

// Loads the data from the JSON file into a JS object, which I then use to fill
// the tile rack and make each tile draggable.
$.getJSON("graphics/pieces.json", function(data) {
    json = data;
    fillTileRack();
    makeDraggable();
});