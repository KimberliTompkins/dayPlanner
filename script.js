var now = moment().format("LLL"); // current date and time
var currentHour = moment().hours();

function initialize(){
    $("#currentDay").text(now);
// set the colors
    for(var i = 9;i < 18;i++){
        if (i < currentHour){
            $(`#${i}`).addClass("past");  
        }
        else if(i === currentHour){
            $(`#${i}`).addClass("present");  
        }
        else{
            $(`#${i}`).addClass("future");
        }
        $(`#${i}`).text(localStorage.getItem(i));  
    }   
   //get saved event
   
       
}

window.onload = function(){
    initialize();
   }

   // Save the event

   $(".saveBtn").click(function(){
       var timeSlot =   $(this).attr("data-time")
       console.log($(this).attr("data-time"))
       //console.log($(`#${timeSlot}`).text)
       localStorage.setItem($(this).attr("data-time"),$(`#${timeSlot}`).val())
     
   }
   )