import { elements } from "./DOMelements";
import imageData from "./imgData";
const { body, imgs, modal, modalImg, prevBtn, nextBtn, closeBtn } = elements;

if (modal) {
  let i = 0;
  let data;
  // Open Modal
  function openModal(e) {
    i = 0;
    data = e.target.dataset.imgs;
    loadImg(imageData[data][i]);
    body.classList.add("noscroll");
    prevBtn.addEventListener("click", move);
    nextBtn.addEventListener("click", move);
    modal.classList.add("open");
  }
  // Close Modal
  function closeModal() {
    body.classList.remove("noscroll");
    prevBtn.removeEventListener("click", move);
    nextBtn.removeEventListener("click", move);
    modal.classList.remove("open");
  }

  //move back or forward
  function move(e) {
    if (e.currentTarget === nextBtn) {
      i < imageData[data].length - 1 ? (i = i + 1) : (i = 0);
    } else if (e.currentTarget === prevBtn) {
      i > 0 ? (i = i - 1) : (i = imageData[data].length - 1);
    }
    console.log(imageData[data][i]);
    loadImg(imageData[data][i]);
  }

  // Load img modal
  function loadImg(img) {
    modalImg.src = img;
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
}
