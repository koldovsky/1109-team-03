document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab__product');
  const items = document.querySelectorAll('.catalog__items');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Remove the 'active' class from all tabs and items
      tabs.forEach(t => t.classList.remove('active'));
      items.forEach(item => item.classList.remove('active'));

      // Add the 'active' class to the clicked tab and its associated content
      tab.classList.add('active');
      items[index].classList.add('active');
    });
  });
});


const reviewContainer = document.querySelector('.new-product__review');
const items = document.querySelectorAll('.new-product__review-item');
let currentIndex = 0;

function moveCarousel(direction) {
  let ScreenOffset;
  if (window.innerWidth < 769) {
      ScreenOffset = 1;
  } else {
      ScreenOffset = 2;
  }
  const itemWidth = items[0].offsetWidth;
  
  currentIndex = Math.max(0, Math.min(currentIndex + direction, items.length - ScreenOffset));
  const translateValue = -currentIndex * itemWidth + 'px';
  reviewContainer.style.transform = 'translateX(' + translateValue + ')';
}

window.addEventListener('resize', function() {
  moveCarousel(0);
});