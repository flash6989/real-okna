const imagsTwoSlader = document.querySelectorAll('#works__slider img');
const firstSliderItems = document.getElementsByClassName('service__slider');
let timeSleepTwoSlider = 4000;

window.onload = function() {
  setInterval(() => setImgPath(imagsTwoSlader), timeSleepTwoSlider > 4000 ? 4000 : timeSleepTwoSlider);

  changeFirstSlider(firstSliderItems);
  setInterval(() => changeFirstSlider(firstSliderItems), 5000);
}

function setImgPath(imags) {
  const srcPath = [];
  for(const item of imags) {
    srcPath.push(item.getAttribute('src'));
  }

  for(const inx in imags) {
    if (inx == imags.length -1) {
      imags[inx].setAttribute('src', srcPath[0]);
      break;
    }
    imags[inx].setAttribute('src', srcPath[Number(inx) + 1]);
  }
}

document
  .getElementById('works__slider')
  .addEventListener('click', function(event) {
    const src = event.target.getAttribute('src');
    if (!src) return false;
    if (src == imagsTwoSlader[0].getAttribute('src')) return false;

    while (imagsTwoSlader[0].getAttribute('src') != src) {
      setImgPath(imagsTwoSlader);
    }
});

let idx_two_slider = 0;
function changeFirstSlider(arrItems) {
  for(const item of arrItems) {
    item.classList.remove('active__slider');
  }
  arrItems[idx_two_slider].classList.add('active__slider');

  idx_two_slider++;
  if (idx_two_slider > arrItems.length - 1) idx_two_slider = 0;
}
