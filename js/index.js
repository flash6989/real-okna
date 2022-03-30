const imagsTwoSlider = document.querySelectorAll("#works_slider img");
const allImgSliderTwo = document.querySelectorAll(
  ".works__slidercontainer img"
);
const parentListService = document.querySelector(".service__sliders");
const firstSliderItems = document.querySelectorAll(".service__slider");
const arrowLeft = document.querySelector(".arrow__left");
const arrowRight = document.querySelector(".arrow__right");
const sliderBlockTransform = document.querySelector(".slider__items");

let timeSleepTwoSlider = 4000;
let intervalSlider1 = null;
let intervalSlider2 = null;
window.onload = function () {
  intervalSlider2 = setInterval(
    () => nextImg(sliderBlockTransform),
    timeSleepTwoSlider < 4000 ? 4000 : timeSleepTwoSlider
  );

  intervalSlider1 = setInterval(
    () => changeFirstSlider(firstSliderItems, parentListService),
    4000
  );
};

// function setImgPath(imags) {
//   const srcPath = [];
//   for (const item of imags) {
//     srcPath.push(item.getAttribute("src"));
//     // sliderBlockTransform.style.transform = "translateX(-660px)";
//   }
//   console.log(srcPath);

//   for (const inx in imags) {
//     console.log(inx, "inx");

//     if (inx == imags.length - 1) {
//       imags[inx].setAttribute("src", srcPath[0]);
//       break;
//     }
//     imags[inx].setAttribute("src", srcPath[Number(inx) + 1]);
//   }
// }

// document
//   .getElementById("works_slider")
//   .addEventListener("click", function (event) {
//     const src = event.target.getAttribute("src");
//     if (!src) return false;

//     if (src == imagsTwoSlider[0].getAttribute("src")) return false;

//     while (imagsTwoSlider[0].getAttribute("src") != src) {
//       setImgPath(imagsTwoSlider);
//     }
//   });

//колво картинок всего
let count = 4;
//переменная для суммирования пикселей
let position = 0;

function clickImgChange(event) {
  console.log(event);
  const targetUrl = event.target.getAttribute("src");

  allImgSliderTwo.forEach((item, id) => {
    item.getAttribute("src") == targetUrl ? (position = 660 * id) : null;
  });
  handleChangeImg();
}

function handleChangeImg() {
  clearInterval(intervalSlider2);

  if (position > 660 * count - 1) position = 0;
  sliderBlockTransform.style.transform = `translateX(${-position + "px"})`;
}

document
  .querySelector(".works__smallfoto")
  .addEventListener("click", (event) => clickImgChange(event));

console.log(allImgSliderTwo);

function nextImg(sliderBlockTransform) {
  position += 660;
  if (position > 660 * count - 1) position = 0;
  sliderBlockTransform.style.transform = `translateX(${-position + "px"})`;
}

function changeFirstSlider(arrItems, parentListService) {
  arrItems.forEach((element) => {
    if (element.classList.contains("active__slider")) {
      element.classList.remove("active__slider");

      return element.classList.add("no__activeleft");
    }

    if (element.classList.contains("no__activeright")) {
      element.classList.remove("no__activeright");
      return element.classList.add("active__slider");
    }
    if (element.classList.contains("no__activeleft")) {
      element.classList.remove("no__activeleft");
      return element.classList.add("no__activeright");
    }
  });
}

function changeFirstSliderLeft(arrItems, parentListService) {
  arrItems.forEach((element) => {
    if (element.classList.contains("active__slider")) {
      element.classList.remove("active__slider");

      return element.classList.add("no__activeleft");
    }

    if (element.classList.contains("no__activeright")) {
      element.classList.remove("no__activeright");
      return element.classList.add("active__slider");
    }
    if (element.classList.contains("no__activeleft")) {
      element.classList.remove("no__activeleft");
      return element.classList.add("no__activeright");
    }
  });
}

arrowLeft.addEventListener("click", (event) => {
  clearInterval(intervalSlider1);
});

arrowRight.addEventListener("click", (event) => {
  console.log("клик по правой стрелке");
  changeFirstSlider(firstSliderItems);
  clearInterval(intervalSlider1);
});
