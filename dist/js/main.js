!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o={htmlTag:document.querySelector("html"),headerTag:document.querySelector("header"),links:document.querySelectorAll("a"),span:document.querySelector(".featured span"),mainTag:document.querySelector("main"),imgGallery:document.querySelector(".image-gallery"),imgs:document.querySelectorAll(".img-set"),intro:document.querySelector(".intro"),welcome:document.querySelector(".intro h1")};if(window.innerWidth>=850&&o.mainTag.classList.contains("home")){let e=0,t=1;const n=()=>{e--,e<0&&(e=o.imgs.length-1),t++},i=()=>{e++,e>o.imgs.length-1&&(e=0),t++},r=()=>{o.imgs.forEach((e,t)=>{e.classList.remove("inView"),e.style.opacity=0;Math.floor(4*Math.random()+1),Math.floor(4*Math.random()+1);1===t?e.classList.add("top-left"):2===t?e.classList.add("top-right"):3===t?e.classList.add("bottom-left"):4===t&&e.classList.add("bottom-right")})},s=()=>{o.imgs[e].style.zIndex=t,o.imgs[e].classList.add("inView"),o.imgs[e].style.opacity=1},a=t=>{37===t.keyCode?(n(),r(),s()):39!==t.keyCode&&"click"!==t.type||(i(),r(),s()),o.span.innerHTML=` 0${e+1} / 0${o.imgs.length}`};o.imgGallery.addEventListener("click",a),window.addEventListener("keydown",a),window.addEventListener("load",a)}console.log(window);window.addEventListener("resize",(function(){window.innerWidth<=600?o.imgs.forEach(e=>{e.style.opacity=1,e.classList.add("resize"),e.classList.remove("top-left"),e.classList.remove("top-right"),e.classList.remove("bottom-left"),e.classList.remove("bottom-right")}):o.imgs.forEach(e=>{e.classList.remove("resize")})}));if(o.intro){const e=()=>{o.intro.classList.add("close"),o.headerTag.classList.add("animate"),o.imgGallery.classList.add("animate")};o.intro.addEventListener("animationend",e)}window.addEventListener("load",()=>{console.log(o.mainTag.classList.contains("home")),!o.mainTag.classList.contains("home")&&(o.imgGallery.style.opacity=1,o.headerTag.style.opacity=1,o.intro.removeEventListener())})}]);
//# sourceMappingURL=main.js.map