import { elements } from "./DOMelements";
const { imgs, modal, modalImg, prevBtn, nextBtn, closeBtn } = elements;

// Open Modal
function openModal(e) {
  const currentSrc = e.currentTarget.querySelector("img").src;
  loadImg(currentSrc, imgs);
  prevBtn.addEventListener("click", move, { once: true });
  nextBtn.addEventListener("click", move, { once: true });
  modal.classList.add("open");
}
// Close Modal
function closeModal() {
  modal.classList.remove("open");
}

//move back or forward
function move(e) {
  console.log(e.currentTarget);
}

// Load img modal
function loadImg(src) {
  modalImg.src = src;
}

// check outside Modal content
function isOutside(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

// Handlers
function handleClick(e) {
  openModal(e);
}

imgs.forEach((img) => img.addEventListener("click", handleClick));
modal.addEventListener("click", isOutside);
closeBtn.addEventListener("click", closeModal);
