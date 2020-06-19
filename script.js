$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id")
        var value = $(this).siblings(".description").val();
        localStorage.setItem(time, value);



    })
    //end click function 
    function date() {
        $("#currentDay").text(moment().format("dddd MMM Mo YYYY"))
        console.log(moment().format("dddd MMM Mo YYYY"));

    }
    date();
    function hourChange() {
        var currentHour = moment().hours()
        localStorage.setItem("hour", JSON.stringify(currentHour));
        var currentHour = JSON.parse(localStorage.getItem("hour"))
    }
});