

let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");

// Custom Double Slider
const rangeInput = document.querySelectorAll(".range-input input");
const progress = document.querySelector(".progress");

const gap = 0;

window.onload = () => {
  rangeInput.forEach((input) => {
    input.addEventListener("input", (event) => {
      let minVal = parseInt(rangeInput[0].value) || 0;
      let maxVal = parseInt(rangeInput[1].value) || 420;

      if (maxVal - minVal < gap) {
        if (event.target.className === "range-min") {
          rangeInput[0].value = maxVal - gap;
        } else {
          rangeInput[1].value = minVal + gap;
        }
      } else {
        displayValOne.textContent = minVal;
        displayValTwo.textContent = maxVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
};

// Make Calendar Options Sticky
let calOpt = document.querySelector(".calendar-options");
let sticky = calOpt.offsetTop;

window.onscroll = () => {
  let width = window.innerWidth > 0 ? window.innerWidth : screen.width;

  // If device width is less than 768px, do not make calendar options sticky
  if (width > 768) {
    if (window.pageYOffset >= sticky) {
      calOpt.classList.add("sticky");
    } else {
      calOpt.classList.remove("sticky");
    }
  }
};

// Responsive Side Menu
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

// Sidebar Menu Toggle
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});



// Responsive Search Bar
let resSearch = document.querySelector(".responsive-search");

function openSearch() {
  resSearch.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeSearch() {
  resSearch.style.display = "none";
  document.body.style.overflow = "auto";
}
