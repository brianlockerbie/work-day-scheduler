var displayTime = document.querySelector("#currentDay");
var currentTime = moment();

displayTime.textConent = currentTime.format("dddd, MMMM Do");

$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // save in localStorage
    localStorage.setItem(time /* aka KEY = row id */, value /* text in the textarea */);
});

var currentTime = parseInt(moment().format('H'))

// 9AM
$("#9am-row .description").val(localStorage.getItem("9am-row" /* localStorage KEY also the row id */));

// 10am
$("#10am-row .description").val(localStorage.getItem("#10am-row"));

// 11am
$("#11am-row .description").val(localStorage.getItem("11am-row"));
    
// 12pm
$("#12pm-row .description").val(localStorage.getItem("12pm-row"));
    
// 1pm
$("#1pm-row .description").val(localStorage.getItem("1pm-row"));
    
// 2pm
$("#2pm-row .description").val(localStorage.getItem("2pm-row"));
    
// 3pm
$("#3pm-row .description").val(localStorage.getItem("3pm-row"));
    
// 4pm
$("#4pm-row .description").val(localStorage.getItem("4pm-row"));
    
// 5pm
$("#5pm-row .description").val(localStorage.getItem("5pm-row"));
    

var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour1 = 13;
var hour2 = 14;
var hour3 = 15;
var hour4 = 16;
var hour5 = 17;

var currentHour = moment().format('H');
    
// 9am 
if (currentHour < hour9) {
    $("#9am-text").addClass("future");
} else if (currentHour > hour9) {
    $("#9am-text").addClass("past");
} else if (currentHour = hour9) {
    $("#9am-text").addClass("present");
}
    
// 10am 
if (currentHour < hour10) {
    $("#10am-text").addClass("future");
} else if (currentHour > hour10) {
    $("#10am-text").addClass("past");
} else if (currentHour = hour10) {
    $("#10am-text").addClass("present");
}

// 11am
if (currentHour < hour11) {
    $("#11am-text").addClass("future");
} else if (currentHour > hour11) {
    $("#11am-text").addClass("past");
} else if (currentHour = hour11) {
    $("#11am-text").addClass("present");
}

// 12pm
if (currentHour < hour12) {
    $("#12pm-text").addClass("future");
} else if (currentHour > hour12) {
    $("#12pm-text").addClass("past");
} else if (currentHour = hour12) {
    $("#12pm-text").addClass("present");
}

// 1pm
if (currentHour < hour1) {
    $("#1pm-text").addClass("future");
} else if (currentHour > hour1) {
    $("#1pm-text").addClass("past");
} else if (currentHour = hour1) {
    $("#1pm-text").addClass("present");
}

// 2pm
if (currentHour < hour2) {
    $("#2pm-text").addClass("future");
} else if (currentHour > hour2) {
    $("#2pm-text").addClass("past");
} else if (currentHour = hour2) {
    $("#2pm-text").addClass("present");
}

// 3pm
if (currentHour < hour3) {
    $("#3pm-text").addClass("future");
} else if (currentHour > hour3) {
    $("#3pm-text").addClass("past");
} else if (currentHour = hour3) {
    $("#3pm-text").addClass("present");
}

// 4pm
if (currentHour < hour4) {
    $("#4pm-text").addClass("future");
} else if (currentHour > hour4) {
    $("#4pm-text").addClass("past");
} else if (currentHour = hour4) {
    $("#4pm-text").addClass("present");
}

// 5pm
if (currentHour < hour5) {
    $("#5pm-text").addClass("future");
} else if (currentHour > hour5) {
    $("#5pm-text").addClass("past");
} else if (currentHour = hour5) {
    $("#5pm-text").addClass("present");
}