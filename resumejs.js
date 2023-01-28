var getNavAnchors = document.querySelectorAll(".nav-menu a");
for (var i = 0; i < getNavAnchors.length; i++) {
  getNavAnchors[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionID);
    // var target = targetSection.getBoundingClientRect().top;
    // var currPos = 0;

    var scrollInterval = setInterval(function () {
      var targetSectionCoordinates = targetSection.getBoundingClientRect().top;
      if (targetSectionCoordinates <= 0) {
        clearInterval(scrollInterval);
        return;
      }
      // currPos += 50;
      window.scrollBy(0, 50);
    }, 20);
  });
}

var skillProgress = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById("skills-container");
window.addEventListener("scroll", checkScroll);
// var skillBars = document.querySelectorAll('.skill-progress');
// window.addEventListener("scroll", checkScrollOnBar);
var animationDone = false;

function initialiseBars() {
  for (let bar of skillProgress) {
    bar.style.width = 0 + "%";
  }
}

initialiseBars();

function fillBars() {
  for (let bar of skillProgress) {
    let targetWidth = bar.getAttribute("data-skill-level");
    let currWidth = 0;
    var takeInterval = setInterval(function () {
      if (currWidth > targetWidth) {
        clearInterval(takeInterval);
        return;
      }
      currWidth++;
      bar.style.width = currWidth + "%";
    }, 5);
  }
}

// function initialiseBar(){
// 	for(let bar of skillBars){
// 		bar.style.width = 0 + '%';
// 	}
// }

// initialiseBar();

// function checkScrollOnBar() {
//   for (let bar of skillBars) {
//     // let animationDone = false;
//     // console.log(animationDone);
//     let coordinates = bar.getBoundingClientRect().top;
//     let skillProgress = bar.querySelector(".skill-progress > div");
//     if (!animationDone && coordinates <= window.innerHeight) {
//       animationDone = true;
//       console.log("Skill bar visible");
//       let targetWidth = skillProgress.getAttribute("data-skill-level");
//       console.log(targetWidth);
//       let currWidth = 0;
//       var takeInterval = setInterval(function () {
//         if (currWidth > targetWidth) {
//           clearInterval(takeInterval);
//           return;
//         }
//         currWidth++;
//         bar.style.width = currWidth + "%";
//       }, 5);
//     }
//   }
// }

function checkScroll() {
  var coordinates = skillsContainer.getBoundingClientRect().top;
  if (!animationDone && coordinates <= window.innerHeight) {
    animationDone = true;
    console.log("Skills section visible");
    fillBars();
  } else if (coordinates > window.innerHeight) {
    animationDone = false;
    initialiseBars();
  }
}

const hamburger = document.querySelector("#hamburger");
console.log(hamburger);
const hiddenMenu = document.querySelector(".hidden-menu");
let isHidden = 1;
hamburger.addEventListener("click", function () {
  console.log(hiddenMenu);
  if (isHidden) {
    hiddenMenu.style.display = "block";
    isHidden = 0;
  } else {
    hiddenMenu.style.display = "none";
    isHidden = 1;
  }
});
