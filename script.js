let currentStep = 0;


const steps =
  document.querySelectorAll(".step");


const dots =
  document.querySelectorAll(".dot");



/* ========================= */
/* SHOW STEP */
/* ========================= */

function showStep(index) {

  steps.forEach((step) => {

    step.classList.remove("active");

  });


  dots.forEach((dot) => {

    dot.classList.remove("active");

  });


  if (steps[index]) {

    steps[index].classList.add("active");

  }


  if (dots[index]) {

    dots[index].classList.add("active");

  }

}



/* ========================= */
/* NEXT STEP */
/* ========================= */

function nextStep() {

  if (
    currentStep <
    steps.length - 1
  ) {

    currentStep++;

    showStep(currentStep);

  }

}



/* ========================= */
/* OPEN GIFT */
/* ========================= */

function openGift() {

  createParticles();


  setTimeout(() => {

    nextStep();

  }, 500);

}



/* ========================= */
/* PARTICLES */
/* ========================= */

function createParticles() {

  const symbols = [
    "✦",
    "✧",
    "♡",
    "·",
    "◆"
  ];


  for (
    let i = 0;
    i < 45;
    i++
  ) {

    setTimeout(() => {

      const particle =
        document.createElement("div");


      particle.className =
        "particle";


      particle.textContent =
        symbols[
          Math.floor(
            Math.random() *
            symbols.length
          )
        ];


      particle.style.left =
        Math.random() * 100 +
        "vw";


      particle.style.fontSize =
        8 +
        Math.random() * 14 +
        "px";


      particle.style.color =
        Math.random() > 0.5
          ? "#ff7fba"
          : "#a991ff";


      particle.style.animationDuration =
        2.5 +
        Math.random() * 3 +
        "s";


      document.body.appendChild(
        particle
      );


      setTimeout(() => {

        particle.remove();

      }, 6000);

    }, i * 35);

  }

}



/* ========================= */
/* START */
/* ========================= */

showStep(currentStep);