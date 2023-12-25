import reviewContent from "../content/review.js";
import {renderReview} from "./main-new-render-carousel.js"

renderReview(reviewContent);

const reviewContainer = document.querySelector('.new-product__review');
const itemCarousel = document.querySelectorAll('.new-product__review-item');
let currentIndex = 0;

function moveCarousel(direction) {
  let ScreenOffset;
  if (window.innerWidth < 769) {
      ScreenOffset = 1;
  } 
  else {
      ScreenOffset = 2;
  };
  const itemWidth = itemCarousel[0].offsetWidth;
  console.log('!!!');
  currentIndex = Math.max(0, Math.min(currentIndex + direction, itemCarousel.length - ScreenOffset));
  const translateValue = -currentIndex * itemWidth + 'px';
  reviewContainer.style.transform = 'translateX(' + translateValue + ')';
};

const arrowLeft = document.querySelector('.new-product__carousel-arrow.carusel-left');
const arrowRight = document.querySelector('.new-product__carousel-arrow.carusel-right');

arrowLeft.addEventListener('click', function(){
    moveCarousel(-1)
});
arrowRight.addEventListener('click', function(){
    moveCarousel(1)
});
window.addEventListener('resize', function(){
    moveCarousel(0)
});

const startX = 0;
const endX = 0;

const carouselSwaip = document.getElementsByClassName('new-product__carousel-conteiner');

carouselSwaip.addEventListener('touchstart', (e)=>{
    startX = e.touches[0].clientX;
});

carouselSwaip.addEventListener('touchend', (e)=>{
    endX = e.changedTouches[0].clientX;
    const swipeDistance = startX - endX;
    if (swipeDistance > 50) moveCarousel(-1);
    if (swipeDistance < -50) moveCarousel(1);
});