const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let index = 0;

nextBtn.addEventListener("click", () => {
  if (index < lines.length) {
    circles[index + 1].classList.add("active");
    lines[index].classList.add("active-line");
    prevBtn.classList.remove("disable");
    prevBtn.removeAttribute("disabled");
    index++;
    if (index === lines.length) {
      nextBtn.classList.add("disable");
      nextBtn.setAttribute("disabled", "true");
    }
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    circles[index].classList.remove("active");
    lines[index - 1].classList.remove("active-line");
    nextBtn.classList.remove("disable");
    nextBtn.removeAttribute("disabled");
    index--;
    if (index === 0) {
      prevBtn.classList.add("disable");
      prevBtn.setAttribute("disabled", "true");
    }
  }
});
