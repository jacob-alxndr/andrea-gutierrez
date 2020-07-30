import { elements } from './DOMelements';

// 1. Selectors

// 2. Actions

const handleResize = function() {
  if (window.innerWidth <= 600) {
    elements.imgs.forEach(img => {
      img.style.opacity = 1;
      // img.style.transform = `translate(0,0)`;
      img.classList.add('resize');
      img.classList.remove('top-left');
      img.classList.remove('top-right');
      img.classList.remove('bottom-left');
      img.classList.remove('bottom-right');
    });
  } else {
    elements.imgs.forEach(img => {
      // img.style.opacity = 1;
      // img.style.transform = `translate(0,0)`;
      img.classList.remove('resize');
    });
  }
};
// 3. Events
window.addEventListener('resize', handleResize);
