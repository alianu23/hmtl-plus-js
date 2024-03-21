
const yearDisplay = document.getElementById("year");
const monthDisplay = document.getElementById("month");
const dayDisplay = document.getElementById("day");
const hourDisplay = document.getElementById("hour");
const minDisplay = document.getElementById("min");
const secDisplay = document.getElementById("sec");
const btn = document.getElementsByTagName("button")[0];

let year = 0;
let month = 0;
let day = 0;
let hour = 0;
let min = 0;
let sec = 0;
let timer = null;
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let monthson = months[d.getMonth()];
document.getElementById("month1").innerHTML = monthson
document.getElementById("day1").innerHTML = d.getDate();
document.getElementById("year1").innerHTML = d.getFullYear();
document.getElementById("hour1").innerHTML = d.getHours();
document.getElementById("min1").innerHTML = d.getMinutes();
document.getElementById("sec1").innerHTML = d.getSeconds();


btn.addEventListener("click", () => {
    if (!timer) {
        timer = setInterval(() => {
            sec += 1;
            if(sec === 60){
                min += 1;
                sec = 0;
                if (min === 60) {
                    hour += 1;
                    min = 0;
                    if (hour === 24) {
                        hour = 0;
                        day += 1;
                        if (day === 31) {
                            day = 0;
                            month +=1;
                            if (month === 12) {
                                month =0;
                                year +=1;
                                if (year === 10){
                                    year = 0;
                                }
                            }
                        }
                    }
                }
            }
            display();
        }, 1200);
    }
});
function display() {
    secDisplay.textContent = sec.toString().padStart(2, "0");
    minDisplay.textContent = min.toString().padStart(2, "0");
    hourDisplay.textContent = hour.toString().padStart(2, "0");
    dayDisplay.textContent = day.toString().padStart(2, "0");
    monthDisplay.textContent = months[month];
    yearDisplay.textContent = year.toString().padStart(2, "0");
   }
