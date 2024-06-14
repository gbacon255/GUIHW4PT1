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

function validate(){
    var validNum = 0;
    if($("#topStart").val() < -75){
        $("#errorTStart").hide();
        $("#HighTStart").hide();
        $("#LowTStart").show();
    }
    if($("#topStart").val() > 75){
        $("#LowTStart").hide();
        $("#errorTStart").hide();
        $("#HighTStart").show();
    }
    if($("#topStart").val() ==""){
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
    if($("#topEnd").val() > 75){
        $("#LowTEnd").hide();
        $("#errorTEnd").hide();
        $("#HighTEnd").show();
    }
    if($("#topEnd").val() ==""){
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
    if($("#sideStart").val() > 75){
        $("#LowSStart").hide();
        $("#errorSStart").hide();
        $("#HighSStart").show();
    }
    if($("#sideStart").val() ==""){
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
    if($("#sideEnd").val() > 75){
        $("#LowSEnd").hide();
        $("#errorSEnd").hide();
        $("#HighSEnd").show();
    }
    if($("#sideEnd").val() ==""){
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
        generateTable(tStart,tEnd,sStart,sEnd);
    }
}