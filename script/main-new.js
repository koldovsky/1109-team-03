const tabs = document.querySelectorAll('.tab__product');
const items = document.querySelectorAll('.catalog__items');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    items.forEach(item => item.classList.remove('active'));

    tab.classList.add('active');
    items[index].classList.add('active');
  });
});


const reviewContainer = document.querySelector('.new-product__review');
const itemCarusel = document.querySelectorAll('.new-product__review-item');
let currentIndex = 0;

function moveCarousel(direction) {
  let ScreenOffset;
  if (window.innerWidth < 769) {
      ScreenOffset = 1;
  } else {
      ScreenOffset = 2;
  }
  const itemWidth = itemCarusel[0].offsetWidth;
  console.log()
  currentIndex = Math.max(0, Math.min(currentIndex + direction, itemCarusel.length - ScreenOffset));
  const translateValue = -currentIndex * itemWidth + 'px';
  reviewContainer.style.transform = 'translateX(' + translateValue + ')';
}

window.addEventListener('resize', function() {
  moveCarousel(0);
});