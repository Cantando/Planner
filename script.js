$(document).ready(function () {
    // place date on page using moment formula
    function date() {
        $("#currentDay").text(moment().format("dddd MMM Mo YYYY"));
        console.log(moment().format("dddd MMM Mo YYYY"));
    }
    date();
    // set up save button
    $(".saveButton").on("click", function () {
        console.log("I clicked a button");
        var time = $(this).parent().attr("id")
        var value = $(this).siblings(".description").val();
        localStorage.setItem(time, value);
        console.log(time);

    });
    // get information back using localStorage
    function getFromLocalStorage() {
        var timeTab = ["9", "10", "11", "12", "1", "2"]

        if (localStorage) {
            for (var i = 0; i < timeTab.length; i++) {
                var time = timeTab[i]
                var timeNote = localStorage.getItem(time)
                console.log(timeNote);
                if (timeNote) {
                    // This will give us the textarea child if the #hour-9 element
                    // $("#hour-9 > textarea")
                    $("#"+time + " " + "textarea").val(timeNote);
                }
                
            }
            


        }
        
    }
    getFromLocalStorage();



    $("button").click(function () {
        console.log("i clicked a button");

    });
    
  
        $('.compare').click(function(e) {
        
          var present = $('#date').val();
        
          var past = moment();
          var future = moment(date);
        
          if (past > future) {
            $('.result').text('Date is past');
          } else {
            $('.result').text('Date is future');
          }
      
        });
      
      });
// get hour from moment 
// get hour  from element
// compare to === < >
// and class to the row 





    









