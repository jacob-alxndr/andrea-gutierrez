import { elements } from './DOMelements';

// 1. Selectors
let currentSlide = 0;
let z = 1;

// 2. Actions
const handleSlides = () => {
  currentSlide++;
  if (currentSlide > elements.imgs.length - 1) {
    currentSlide = 0;
  }
  z++;
  console.log('yay');

  elements.imgs.forEach(img => {
    img.getElementsByClassName.animation = '';
  });
  elements.imgs[currentSlide].getElementsByClassName.zIndec = z;
  elements.imgs[currentSlide].style.animation = 'fade .3s';
};

// 3. Events
elements.imgGallery.addEventListener('click', handleSlides);
