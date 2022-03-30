const imagsTwoSlider = document.querySelectorAll("#works_slider img");
const firstSliderItems = document.querySelectorAll(".service__slider");

let timeSleepTwoSlider = 4000;

window.onload = function () {
  setInterval(
    () => setImgPath(imagsTwoSlider),
    timeSleepTwoSlider > 4000 ? 4000 : timeSleepTwoSlider
  );
  setInterval(() => changeFirstSlider(firstSliderItems), 4000);
};

function setImgPath(imags) {
  const srcPath = [];
  for (const item of imags) {
    srcPath.push(item.getAttribute("src"));
  }
  for (const inx in imags) {
    if (inx == imags.length - 1) {
      imags[inx].setAttribute("src", srcPath[0]);
      break;
    }
    imags[inx].setAttribute("src", srcPath[Number(inx) + 1]);
  }
}

document
  .getElementById("works_slider")
  .addEventListener("click", function (event) {
    const src = event.target.getAttribute("src");
    if (!src) return false;

    if (src == imagsTwoSlider[0].getAttribute("src")) return false;

    while (imagsTwoSlider[0].getAttribute("src") != src) {
      setImgPath(imagsTwoSlider);
    }
  });

let idx_two_slider = 0;
function changeFirstSlider(arrItems) {
  for (const item of arrItems) {
    item.classList.remove("active__slider");
  }
  arrItems[idx_two_slider].classList.add("active__slider");


  idx_two_slider++;
  if (idx_two_slider > arrItems.length - 1) idx_two_slider = 0;
}

function changeFirstSlider(arrItems) {
  console.log(arrItems);

  arrItems.forEach((element) => {
    if (element.classList.contains("active__slider")) {
      console.log(element, "active");
      element.classList.remove("active__slider");
      element.classList.add("no__activeleft");
      return;
    }
    if (element.classList.contains("no__activeleft")) {
      console.log(element, "left");
      element.classList.remove("no__activeleft");
      element.classList.add("no__activeright");
      return;
    }
    if (element.classList.contains("no__activeright")) {
      console.log(element, "right");
      element.classList.remove("active__slider");
      return;
    }
  })
