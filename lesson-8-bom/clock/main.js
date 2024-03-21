function startTime() {
    const today = new Date();
    let mo = today.getMonth();
    let d = today.getDate();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    mo = checkTime(mo);
    d = checkTime(d);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("clock").innerHTML = mo + "/" + d + "-" + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const today = new Date();
  let month = months[today.getMonth()];
  let day = today.getDay();
  day = checkTime(day);
  document.getElementById("date").innerHTML = month + "/" + day;

  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }