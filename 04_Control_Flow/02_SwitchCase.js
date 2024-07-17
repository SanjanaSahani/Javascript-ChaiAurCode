// --------Switch Case Syntax--------- 
// switch (key) {
//     case value:   
//         break;
//     default:
//         break;
// }

const month = 3;
switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        break;
    case 6:
        console.log("Jul");
        break;
    case 6:
        console.log("Aug");
        break;
     default:
        console.log("Not Found");
        break;
}
//Output: Mar

const week = "Tuesday";
switch(week){
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
        console.log("Friday");
        break;
    case "Saturday":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
    default:
        console.log("Not Found the week");
        break;
}
//Output: Tuesday

const number = 5;
switch(number){
    case 1:
        console.log(number + 10 ); 
        break;
    case 2:
        console.log(number + 10 ); 
        break;
    case 3:
        console.log(number + 10 ); 
        break;
    case 4:
        console.log(number + 10 ); 
        break;
    case 5:
        console.log(number + 10 ); 
        break;
    case 6:
        console.log(number + 10 ); 
        break;
        default:
            console.log("Sorry");
            break;
}
//Output: 15

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      console.log(day);
      break;
    case 1:
      day = "Monday";
      console.log(day);
      break;
    case 2:
       day = "Tuesday";
       console.log(day);
      break;
    case 3:
      day = "Wednesday";
      console.log(day);
      break;
    case 4:
      day = "Thursday";
      console.log(day);
      break;
    case 5:
      day = "Friday";
      console.log(day);
      break;
    case 6:
      day = "Saturday";
      console.log(day);
  }
  //Output: Tuesday --changed according the day.