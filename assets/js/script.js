var savedItems = {};

var today = moment().format("dddd, MMMM Do");

var currentTime = parseInt(moment().format('H'))

$("#currentDay")
    .text(today);


var createItem = function () {
    var text = $(this)
        .text()
        .trim()

    var textInput = $("<textarea")
        .addClass("m-0")
        .val(text)

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
}


$(".textBox").on("click", function(){
    var text = $(this)
        .text()
        .trim()

        console.log(text);
})