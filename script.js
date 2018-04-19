//Exercise One:
            var total = 0;
            var num = prompt("Enter a Number");

            for (x = 0; x <= num; x ++) {
            total += x;
            }

            console.log("The total is: " + total);
            
//Exercise Two: do..while loop
            
            var usergame;
            do {
                usergame = prompt("Do you want to play?");
	       if (usergame =="yes"){
                var initialWord = prompt ("Enter a word")
                console.log(initialWord +="");
                }
                
           else if (usergame !="yes" && usergame !="no"){
                alert("Say yes or no");
            } else {
                break;
            }
                
            } while(usergame !="no");
            
//Exercise Three: while loop
            
            
    var i = 1;
    var text = "";
    namegame = prompt("Do you want to print your name?");
  while (namegame =="yes"){
                        var text = prompt ("What's your name?")
                        console.log(text += i++);
                        namegame = prompt("Do you want to print your name again?");
                    }     
     
    if (namegame !="no") {    
       }
   
            
            
            
//Exercise Four: Time of Day
            
            do {
                timeofDay = prompt("What time is it? Type morning, noon or evening");
	       if (timeofDay == "morning"){
               var mealSugg = ("Since it is morning, you should be eating breakfast. We suggest eggs and toast") ;
           } else if (timeofDay == "noon"){
               var mealSugg = ("Since it is noon, you should be eating lunch. We suggest a salad");
           } else if (timeofDay == "evening") {
               var mealSugg = ("Since it is evening, you should be eating dinner. We suggest chicken and rice")
           } else  {
                break;
            }
            console.log(mealSugg);
            } while(timeofDay !="morning" && timeofDay !="noon" && timeofDay !="evening");
