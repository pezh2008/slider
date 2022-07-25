let slides = document.querySelectorAll(".slide");
let left = document.querySelector(".btn-left");
let right = document.querySelector(".btn-right");

let activeIndex = 0;

function activeSlide(activeIndex) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[activeIndex].classList.add("active");
}
function nextSlide() {
  activeIndex++;
  activeSlide(activeIndex);
}

right.addEventListener("click", nextSlide);
