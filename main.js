let currentDay = document.querySelector(".currentDayofTheWeek");
let currentTime = document.querySelector(".currentUTCTIme");

let d = new Date();
let day = d.getDay();
const newDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
currentDay.innerHTML = newDay[day];
let options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  millisecond: "numeric",
};
let utcHours = d.getUTCHours(undefined, options);
let utcMinute = d.getUTCMinutes(undefined, options);
let utcSecond = d.getUTCSeconds(undefined, options);

currentTime.innerHTML = `${utcHours}:${utcMinute}:${utcSecond}`;
