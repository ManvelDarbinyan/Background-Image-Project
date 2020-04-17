const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];
const buttons = document.querySelectorAll("button");
const image = document.querySelector(".img");
image.style.backgroundImage = `url('img/contBcg-0.jpeg')`;
let counter = 0;

buttons.forEach((button) => {
  button.addEventListener("click", changeImage);
  function changeImage() {
    if (button.classList.contains("btn-left")) {
      counter--;
      if (counter < 0) {
        counter = pictures.length - 1;
      }
      image.style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
    }
    if (button.classList.contains("btn-right")) {
      counter++;
      if (counter > pictures.length - 1) {
        counter = 0;
      }
      image.style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
    }
  }
});
