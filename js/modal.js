const modal = document.getElementById('modal');

const background = document.querySelector(".modal__background");
background.addEventListener('click', () => {
  isShowModal();
});

function isShowModal () {
  modal.classList.toggle('hide');
  modal.classList.toggle('show');
}

function openModal () {
  isShowModal();
}