let currentIndex = 0;
const items = document.querySelectorAll('.product-slider__image');
const totalItems = items.length;

function nextSlide() {
    if (currentIndex < totalItems - 3) {
        currentIndex++;
    }
    updateSlider();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateSlider();
}

function updateSlider() {
    const newPosition = -currentIndex * 100 / 3 + '%';
    document.querySelector('.product-slider__images').style.transform = 'translateX(' + newPosition + ')';
}

// Adjust the transition property when resizing
window.addEventListener('resize', () => {
    const containerWidth = document.querySelector('.product-slider__container').offsetWidth;
    const itemWidth = containerWidth / 3;
    const transitionDuration = (totalItems / 3) * 0.5 + 's'; // Assuming 0.5s per item

    document.querySelector('.product-slider__images').style.transition = `transform ${transitionDuration} ease-in-out`;
    items.forEach(item => {
        item.style.width = itemWidth + 'px';
    });

    updateSlider();
});

// Initial update
updateSlider();