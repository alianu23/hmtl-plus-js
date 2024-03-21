const images = [
  "https://i.pinimg.com/564x/8b/aa/46/8baa4649d2ca491b3abc7d7690f94f19.jpg",
  "https://i.pinimg.com/564x/6e/93/3b/6e933b79c2393e4298f769ca40d765e7.jpg",
  "https://i.pinimg.com/564x/e5/9e/39/e59e39c88fda8045ce15c352d3ea3721.jpg",
  "https://i.pinimg.com/564x/a6/11/39/a6113983a9fdd6c1bd166a91e55c58cd.jpg",
  "https://i.pinimg.com/564x/d0/81/87/d08187b205cae3d8651c0a3035716baf.jpg",
];
const imgContainer = document.querySelector(".main");
console.log(imgContainer);
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
// const container= document.querySelector(".main");
// const slide= document.querySelectorAll(".slide")

let index = 0;

imgContainer.src = images[index];
prevButton.addEventListener("click", () => {
  if (index < 1) index = 5;
  index--;
  // imgContainer.src = images[index];
  imgContainer.innerHTML = `<img class="slide" src="${images[index]}" alt=""/>`;
});
nextButton.addEventListener("click", () => {
  if (index >= 4) index = -1;
  index++;
  // imgContainer.src = images[index];
  console.log('<img src="' + images[index] + "\" alt='pic'/>");
  imgContainer.innerHTML = `<img class="slide" src="${images[index]}" alt=""/>`;
});

// nextButton.addEventListener("click", () => {
//     console.log("work", container.classList);
//     container.classList.toggle("active")
// })
