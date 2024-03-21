let weeknumber = 1;
let weekname;
if (weeknumber == 1){
    weekname = "Даваа";
}
else if (weeknumber == 2){
    weekname = "Мягмар";
}
else if (weeknumber == ""){
    weekname = "Лхагва";
}
else {
    weekname = "Буруу тоо"
}
console.log(weekname);

weeknumber = 3
switch (weeknumber){
    case 1: {
        weekname = "Даваа";
        break;
    }
    case 2: {
        weekname = "Мягмар";
        break;
    }
    case 3: {
        weekname = "Лхагва";
        break;
    }
    default: weekname = "Буруу тоо"
}
console.log(weekname)

let age = 18;
if(age>=18){
    console.log("Та насанд хүрсэн байна.");
    console.log("Таны нас:", 18)
}
