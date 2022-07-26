var today = moment();
$("#currentDay").text("Today is " + today.format("dddd, MMMM Do YYYY"));
var container = document.getElementById("container")
var currentHour = moment().format("HH");
$(console.log(currentHour));
var inputField;
//var input = $(document.getElementsByTagName.forEach("input"));
var input09 = $("#input09");
//document.getElementById("#input10");
//document.getElementById("#input11");
//document.getElementById("#input12");
//document.getElementById("#input13");
//document.getElementById("#input14");
//document.getElementById("#input15");
//document.getElementById("#input16");
//document.getElementById("#input17");


//var time = document.querySelector(input());
$(document).ready(function() {
    //var inputRowTime = $(input.data("time"));
    //console.log(inputRowTime);
    //for (let index = 0; index < inputRowTime.length; index++) {
        //var time
        if (time === currentHour) {
            $(input09.addClass("present"));
        }
        else if (time < currentHour) {
                $(input09.addClass("past"));
            } 
            else {
                $(input09.addClass("future"));
            }
        
   // };
              
});

//var apptInfo = JSON.parse(localStorage.getItem("apptInfo")) || [];





