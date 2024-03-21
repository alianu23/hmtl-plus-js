const date = new Date()
date.getFullYear(2023);
date.getMonth(8);
date.getDay(1);
let year =  date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
document.getElementById("date").innerHTML = day + "-" + month + "-" + year;
document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;