var input = [];

// Display's the time and date
$("#currentDay").append(moment().format("dddd, MMMM Do, YYYY - h:mm a"));

//Stores to local storage
function storedText() {
    $(".saveBtn").on("click", function() {
        
        var data = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        //SAVES
        localStorage.setItem(time, data);
      });

        //Pulls from local storage
        for (var i =1; i < 10; i++){

        $("#hour"+ i +" .description").val(localStorage.getItem("hour"+ i));
        
      }
}

// Color
var textColor = function() {
    //Compare time to time in row
    for (i = 1; i < 10; i++){
        var rowHour = $("#hour" + i).find("h6").html();
        var hour = moment(rowHour, "HHA").format("HH");
        var now = moment().format("HH");
        var areaColor = $("#hour" + i).find("textarea");

    //Sttatement for the color of the row
    if (now === hour) {
        areaColor.removeClass("past future");
        areaColor.addClass("present");
    } else if (now - hour > 0) {
        areaColor.removeClass("future present");
        areaColor.addClass("past");
    } else if (now - hour < 0){
        areaColor.removeClass("past present");
        areaColor.addClass("future");
    }
}
};

// checks tasks
setInterval(function() {
    textColor();
}, 60000);

storedText();
textColor();