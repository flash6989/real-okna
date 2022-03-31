const modal = document.querySelector("#modal");

function openModal(e, modal) {
  modal.classList.remove("modal__hidden");
}

const allButton = document.querySelectorAll(".button__modal");
allButton.forEach(function (elem) {
  elem.addEventListener("click", (event) => openModal(event, modal));
});

// allButton.addEventListener("click", (event) => openModal(event, modal));

modal.addEventListener("click", (event) => removeModal(event));

function removeModal(event) {
  if (event.target.classList.value == "modal") {
    modal.classList.add("modal__hidden");
  }
}
