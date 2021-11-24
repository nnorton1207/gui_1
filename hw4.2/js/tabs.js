/* 
This function enables the three save buttons to save a table to a tab.
It clears the tab elements if there's existing data in them, then clones
the table and refreshes the tabs.
*/
$(function($) {
    $("#myTabs").tabs();

    $("#save1").click(function() {
        $("#tab1").html("");
        $("#table").clone().appendTo('#tab1');
        $("#myTabs").tabs("refresh");
    });

    $("#save2").click(function() {
        $("#tab2").html("");
        $("#table").clone().appendTo('#tab2');
        $("#myTabs").tabs("refresh");
    });

    $("#save3").click(function() {
        $("#tab3").html("");
        $("#table").clone().appendTo('#tab3');
        $("#myTabs").tabs("refresh");
    });
});