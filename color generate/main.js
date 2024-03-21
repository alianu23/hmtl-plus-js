const btn = document.getElementsByTagName("button")[0];
const container = document.getElementsByClassName("container")[0];
console.log(container);
btn.addEventListener("click", () => {
  container.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const color = randomColor();
    container.innerHTML += `<div class="box"
    style="background:${color}"></div>`;
  }
});

let randomColor = () => {
  let a = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  let c = Math.floor(Math.random() * 255) + 1;
  return "rgb(" + a + "," + b + "," + c + ")";
};
