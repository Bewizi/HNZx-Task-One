let currentDay = document.querySelector(".currentDayofTheWeek");
let currentTime = document.querySelector(".currentUTCTIme");

let d = new Date();
let day = d.getDay();
let options = { hour: 'numeric', minute: 'numeric', second: 'numeric', millisecond: 'numeric' };
let ndate = d.toLocaleTimeString(undefined, options);


switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}


currentDay.innerHTML = day;
currentTime.innerHTML = ndate;