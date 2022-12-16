var savedItems = {};

var today = moment().format("dddd, MMMM Do");
var currentTime = parseInt(moment().format('H'))




$("#currentDay")
    .text(today);


var createItem = function () {
    var text = $(this)
        .text()
        .trim()

    var textInput = $("<textarea>")
        .addClass("m-0")
        .val(text)

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
}
    
$(".textBox").on("click", "p", createItem)


var confirmItem = function(text, id) {
    var text = $(this)
        .val()
        .trim()

    var id = $(this)
        .closest(".row")
        .attr("id")

    var pReturn = $("<p>")
        attr("data-time", id)
        .addClass("my-auto h-75 w-100 pt-3")
        .text(text);

    $(this).replaceWith(pReturn);
}