var today = moment().format("dddd, MMMM Do");

$("#currentDay")
    .text(today);

$(".textBox").on("click", function(){
    var text = $(this)
        .text()
        .trim()

        console.log(text);
})