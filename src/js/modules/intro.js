import { elements } from './DOMelements';

// 1. Selectors

// 2. Actions
const setOpacity = () => {
  console.log(elements.mainTag.classList.contains('home'));
  const notHomePage = !elements.mainTag.classList.contains('home');
  if (notHomePage) {
    elements.imgGallery.style.opacity = 1;
    elements.headerTag.style.opacity = 1;
    elements.intro.removeEventListener();
  }
};
if (elements.intro) {
  const closeIntro = () => {
    elements.intro.classList.add('close');
    elements.headerTag.classList.add('animate');
    elements.imgGallery.classList.add('animate');
  };

  // 3. Events

  elements.intro.addEventListener('animationend', closeIntro);
}
window.addEventListener('load', setOpacity);
