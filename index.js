function updateTime(){

let losAngelesDate = document .querySelector("#los-angeles-date");
let losAngeles =moment().tz("America/Los_Angeles");
losAngelesDate.innerHTML = losAngeles.format("MMMM Do YYYY");
let losAngelesTime = document.querySelector("#los-angeles-time");
losAngelesTime.innerHTML = losAngeles.format("HH:mm:ss [<small>]A[</small>]");

let capetownDate = document.querySelector("#cape-town-date");
let capetown = moment();
capetownDate.innerHTML = capetown.format("MMMM Do YYYY");
let capetownTime = document.querySelector("#cape-town-time");
capetownTime.innerHTML = capetown.format("HH:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

