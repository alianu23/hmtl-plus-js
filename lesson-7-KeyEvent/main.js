const btn = document.getElementsByTagName("button")[0];
const container = document.getElementsByClassName("container")[0];

btn.addEventListener("click", () => {
  container.innerHTML = "";
  for (let index = 0; index < 6; index++) {
    const color = randomColor();
    container.innerHTML += `<div class="box" style="background: ${color}"></div>`;
  }
});

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
