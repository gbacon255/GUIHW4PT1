/*
File: init.js
GUI Assignment: #4, Adding a multiplication table to a website
Garrett Bacon, UMass Lowell Computer Science, Garrett_Bacon@student.uml.edu
This file validates the user input and sends it to my table generation function
*/
$(document).ready(function(){
    
    $("#errorTStart").hide();
    $("#errorTEnd").hide();
    $("#errorSStart").hide();
    $("#errorSEnd").hide();


    $("#LowTStart").hide();
    $("#LowTEnd").hide();
    $("#LowSStart").hide();
    $("#LowSEnd").hide();

    $("#HighTStart").hide();
    $("#HighTEnd").hide();
    $("#HighSStart").hide();
    $("#HighSEnd").hide();



    $("#tableGen").click(function(event){
        validate(); //validate our numbers and generate the table
    });
});

//moved validation to its own function to clean up code, checks for four valid inputs before generating
function validate(currentTab){
    var validNum = 0;
    console.log($("#topStart").val());
    if(parseInt($("#topStart").val()) < -75){
        console.log("reached");
        $("#errorTStart").hide();
        $("#HighTStart").hide();
        $("#LowTStart").show();
    }
    else if($("#topStart").val() > 75){
        $("#LowTStart").hide();
        $("#errorTStart").hide();
        $("#HighTStart").show();
    }
    else if($("#topStart").val() ==""){
        $("#LowTStart").hide();
        $("#HighTStart").hide();
        $("#errorTStart").show();
    }
    else{
        validNum++;
        $("#LowTStart").hide();
        $("#HighTStart").hide();
        $("#errorTStart").hide();
    }

    if($("#topEnd").val() < -75){
        $("#errorTEnd").hide();
        $("#HighTEnd").hide();
        $("#LowTEnd").show();
    }
    else if($("#topEnd").val() > 75){
        $("#LowTEnd").hide();
        $("#errorTEnd").hide();
        $("#HighTEnd").show();
    }
    else if($("#topEnd").val() ==""){
        $("#HighTEnd").hide();
        $("#LowTEnd").hide();
        $("#errorTEnd").show();
    }
    else{
        validNum++;
        $("#HighTEnd").hide();
        $("#LowTEnd").hide();
        $("#errorTEnd").hide();
    } 

    if($("#sideStart").val() < -75){
        $("#errorSStart").hide();
        $("#HighSStart").hide();
        $("#LowSStart").show();
    }
    else if($("#sideStart").val() > 75){
        $("#LowSStart").hide();
        $("#errorSStart").hide();
        $("#HighSStart").show();
    }
    else if($("#sideStart").val() ==""){
        $("#HighSStart").hide();
        $("#LowSStart").hide();
        $("#errorSStart").show();
    }
    else{
        validNum++;
        $("#HighSStart").hide();
        $("#LowSStart").hide();
        $("#errorSStart").hide();
    } 


    if($("#sideEnd").val() < -75){
        $("#errorSEnd").hide();
        $("#HighSEnd").hide();
        $("#LowSEnd").show();
    }
    else if($("#sideEnd").val() > 75){
        $("#LowSEnd").hide();
        $("#errorSEnd").hide();
        $("#HighSEnd").show();
    }
    else if($("#sideEnd").val() ==""){
        $("#HighSEnd").hide();
        $("#LowSEnd").hide();
        $("#errorSEnd").show();
    }
    else{
        validNum++;
        $("#HighSEnd").hide();
        $("#LowSEnd").hide();
        $("#errorSEnd").hide();
    } 

    if (validNum == 4){
        //initialize data to be generated in the table
        const tStart = $("#topStart").val();
        const tEnd = $("#topEnd").val();
        const sStart = $("#sideStart").val();
        const sEnd = $("#sideEnd").val();
        generateTable(tStart,tEnd,sStart,sEnd, currentTab);
    }
}