const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hied");
    fade.classList.toggle("hied");
}

[openModalButton,closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});