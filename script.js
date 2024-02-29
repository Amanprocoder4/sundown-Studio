// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true
// });

let elemCont = document.querySelector(".elem-container");
let imageCont = document.querySelector(".elems-image-container");
let swiperWrapper = document.querySelector(".mySwiper");
let sliderPopup = document.querySelector(".slider-popup");

swiperWrapper.addEventListener(`mousemove`, function (details) {
  let xValue = details.clientX;
  let yValue = details.clientY;
  console.log(xValue);

  setTimeout(function () {
    sliderPopup.style.top = `${yValue}px`;
    sliderPopup.style.left = `${xValue}px`;
  });
});

swiperWrapper.addEventListener("mouseenter", function () {
  sliderPopup.style.transform = `scale(1)`;
});
swiperWrapper.addEventListener("mouseleave", function () {
  sliderPopup.style.transform = `scale(0)`;
});

elemCont.addEventListener("mouseenter", function () {
  imageCont.style.display = "block";
});

elemCont.addEventListener("mouseleave", function () {
  imageCont.style.display = "none";
});

function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector(".fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      // fixed.style.backgroundImage = `url(${image})`
      console.log("image");
    });
  });
}

page4Animation();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let introH1 = function () {
  gsap.from(".h1-container h1", {
    start: "top 80%",
    y: 200,
    scrub: true,
    duration: 1.5,
    opacity: 0.0,
  });
};

introH1();
gsap.from(".headings", {
  start: "top 80%",
  y: 200,
  scrub: true,
  duration: 2,
  opacity: 0,
});
