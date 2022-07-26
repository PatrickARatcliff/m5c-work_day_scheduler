//set variable for todays date
var today = moment();
//set text content of current day div to "today" in long format
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
//pull and set local storage as an array
var apptInfo = JSON.parse(localStorage.getItem("apptInfo")) || [];
//confirmation (after save) info at bottom of page
var confirmation = $(".confirm");

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
});
//functions for save button clicks for each row
//9 am save button
$("#saveBtn09").on("click", function () {
    apptInfo.push({
      time: "9AM",
      appt: $(this).prev().val(),
    });
    localStorage.setItem("apptInfo", JSON.stringify(apptInfo));
    $(confirmation).text("An appointment has been set for " + $(this).prev().val() + " at 9AM");
    //clear input field for next entry
    $('input[type=text]').each(function() {
        $(this).val('');
    });
});
//10am save button
$("#saveBtn10").on("click", function () {
    
    apptInfo.push({
      time: "10AM",
      appt: $(this).prev().val(),
    });
    localStorage.setItem("apptInfo", JSON.stringify(apptInfo));
    $(confirmation).text("An appointment has been set for " + $(this).prev().val() + " at 10AM");
    //clear input field for next entry
    $('input[type=text]').each(function() {
        $(this).val('');
    });
});
//11am save button
$("#saveBtn11").on("click", function () {
    apptInfo.push({
      time: "11AM",
      appt: $(this).prev().val(),
    });
    localStorage.setItem("apptInfo", JSON.stringify(apptInfo));
    //clear input field for next entry
    $('input[type=text]').each(function() {
        $(this).val('');
    });
});
//12pm save button
$("#saveBtn12").on("click", function () {
    apptInfo.push({
      time: "12PM",
      appt: $(this).prev().val(),
    });
    localStorage.setItem("apptInfo", JSON.stringify(apptInfo));
    //clear input field for next entry
    $('input[type=text]').each(function() {
        $(this).val('');
    });
});
//1pm save button
$("#saveBtn13").on("click", function () {
    apptInfo.push({
      time: "1PM",
      appt: $(this).prev().val(),
    });
    localStorage.setItem("apptInfo", JSON.stringify(apptInfo));
    //clear input field for next entry
    $('input[type=text]').each(function() {
        $(this).val('');
    });
});
//2pm save button
$("#saveBtn14").on("click", function () {
    apptInfo.push({
      time: "2PM",
      appt: $(this).prev().val(),
    });
    localStorage.setItem("apptInfo", JSON.stringify(apptInfo));
    //clear input field for next entry
    $('input[type=text]').each(function() {
        $(this).val('');
    });
});
//3pm save button
$("#saveBtn15").on("click", function () {
    apptInfo.push({
      time: "3PM",
      appt: $(this).prev().val(),
    });
    localStorage.setItem("apptInfo", JSON.stringify(apptInfo));
    //clear input field for next entry
    $('input[type=text]').each(function() {
        $(this).val('');
    });
});
//4pm save button
$("#saveBtn16").on("click", function () {
    apptInfo.push({
      time: "4PM",
      appt: $(this).prev().val(),
    });
    localStorage.setItem("apptInfo", JSON.stringify(apptInfo));
});
//5pm save button
$("#saveBtn17").on("click", function () {
    apptInfo.push({
      time: "5PM",
      appt: $(this).prev().val(),
    });
    localStorage.setItem("apptInfo", JSON.stringify(apptInfo));
    //clear input field for next entry
    $('input[type=text]').each(function() {
        $(this).val('');
    });
});
