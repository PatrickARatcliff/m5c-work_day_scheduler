var today = moment();
$("#currentDay").text("Today is " + today.format("dddd, MMMM Do YYYY"));
var container = document.getElementById("container")
var currentHour = moment().format("HH");
$(console.log(currentHour));
var inputField;
//identify input on X row for later styling
var input09 = $("#input09");
var input10 = $("#input10");
var input11 = $("#input11");
var input12 = $("#input12");
var input13 = $("#input13");
var input14 = $("#input14");
var input15 = $("#input15");
var input16 = $("#input16");
var input17 = $("#input17");
//document.getElementById("#input10");
//document.getElementById("#input11");
//document.getElementById("#input12");
//document.getElementById("#input13");
//document.getElementById("#input14");
//document.getElementById("#input15");
//document.getElementById("#input16");
//document.getElementById("#input17");

$(document).ready(function() {
    //add css class (past/present/future) to row based on current hour 
        if (09 === currentHour) {
            $(input09.addClass("present"));
        }
        else if (09 < currentHour) {
            $(input09.addClass("past"));
        } 
        else {
            $(input09.addClass("future"));
        };
        if (10 === currentHour) {
            $(input10.addClass("present"));
        }
        else if (10 < currentHour) {
            $(input10.addClass("past"));
        } 
        else {
            $(input10.addClass("future"));
        };
        if (11 === currentHour) {
            $(input11.addClass("present"));
        }
        else if (11 < currentHour) {
            $(input11.addClass("past"));
        } 
        else {
            $(input11.addClass("future"));
        };
        if (12 === currentHour) {
            $(input12.addClass("present"));
        }
        else if (12 < currentHour) {
            $(input12.addClass("past"));
        } 
        else {
            $(input12.addClass("future"));
        };
        if (13 === currentHour) {
            $(input13.addClass("present"));
        }
        else if (13 < currentHour) {
            $(input13.addClass("past"));
        } 
        else {
            $(input13.addClass("future"));
        };
        if (14 === currentHour) {
            $(input14.addClass("present"));
        }
        else if (14 < currentHour) {
            $(input14.addClass("past"));
        } 
        else {
            $(input14.addClass("future"));
        };
        if (15 === currentHour) {
            $(input15.addClass("present"));
        }
        else if (15 < currentHour) {
            $(input15.addClass("past"));
        } 
        else {
            $(input15.addClass("future"));
        };
        if (16 === currentHour) {
            $(input16.addClass("present"));
        }
        else if (16 < currentHour) {
            $(input16.addClass("past"));
        } 
        else {
            $(input16.addClass("future"));
        };if (17 === currentHour) {
            $(input17.addClass("present"));
        }
        else if (17 < currentHour) {
            $(input17.addClass("past"));
        } 
        else {
            $(input17.addClass("future"));
        };
   // };
              
});

//var apptInfo = JSON.parse(localStorage.getItem("apptInfo")) || [];





