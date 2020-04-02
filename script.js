var now = moment().format("LLL"); // current date and time
var currentHour = moment().hours();

function initialize(){
    $("#currentDay").text(now);

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
    }   
        
       
}



window.onload = function(){
    initialize();
   }
