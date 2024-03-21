const startBtn = document.getElementsByTagName("button")[0];
const stopBtn = document.getElementsByTagName("button")[1];
const resetBtn = document.getElementsByTagName("button")[2];
const doliDisplay = document.getElementById("doli");
const secDisplay = document.getElementById("sec");
const minDisplay = document.getElementById("min");
let doli = 0;
let sec = 0;
let min = 0;
let timer = null;
startBtn.addEventListener("click", () => {
    if (!timer) {
        timer = setInterval(() => {
            doli += 1;
            if (doli === 100) {
                sec += 1;
                doli = 0;
                if (sec === 60) {
                    sec = 0;
                    min += 1;
                    if (min === 60) {
                        min = 0;
                    }
                }
            }
            display();
    }, 10);
 }
});
stopBtn.addEventListener("click", () => {
 clearInterval(timer);
 timer = null;
});
resetBtn.addEventListener("click", () => {
 doli = 0;
 sec = 0;
 min = 0;
 timer = null;
 display();
});
function display() {
 doliDisplay.textContent = doli.toString().padStart(2, "0");
 secDisplay.textContent = sec.toString().padStart(2, "0");
 minDisplay.textContent = min.toString().padStart(2, "0");
}