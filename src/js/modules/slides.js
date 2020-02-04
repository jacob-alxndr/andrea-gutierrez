import { elements } from './DOMelements';

// 1. Selectors
// console.log(window.innerHeight)
if (window.innerWidth >= 850 && elements.mainTag.classList.contains('home')) {
  let currentSlide = 0;
  let z = 1;

  // 2. Actions

  const prev = () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = elements.imgs.length - 1;
    }
    z++;
  };

  const next = () => {
    currentSlide++;
    if (currentSlide > elements.imgs.length - 1) {
      currentSlide = 0;
    }
    z++;
  };

  const moveImage = () => {
    elements.imgs.forEach((img, i) => {
      img.classList.remove('inView');
      img.style.opacity = 0;

      const randomX = Math.floor(Math.random() * 4 + 1) * 25;
      const randomY = Math.floor(Math.random() * 4 + 1) * 25;

      // console.log(randomY);
      // img.style.transform = `translate(${randomX}px, ${randomY}px)`
      // img.style.width = `50%`;
      if (i === 1) {
        img.classList.add('top-left');
      } else if (i === 2) {
        img.classList.add('top-right');
      } else if (i === 3) {
        img.classList.add('bottom-left');
      } else if (i === 4) {
        img.classList.add('bottom-right');
      }
    });
  };

  const updateImage = () => {
    elements.imgs[currentSlide].style.zIndex = z;
    elements.imgs[currentSlide].classList.add('inView');
    elements.imgs[currentSlide].style.opacity = 1;
  };

  const handleSlides = e => {
    if (e.keyCode === 37) {
      prev();
      moveImage();
      updateImage();
    } else if (e.keyCode === 39 || e.type === 'click') {
      next();
      moveImage();
      updateImage();
    }
    elements.span.innerHTML = ` 0${currentSlide + 1} / 0${
      elements.imgs.length
    }`;
  };

  // 3. Events
  elements.imgGallery.addEventListener('click', handleSlides);
  window.addEventListener('keydown', handleSlides);
  window.addEventListener('load', handleSlides);
}
console.log(window);
