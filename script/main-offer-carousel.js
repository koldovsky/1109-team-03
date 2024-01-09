const slides = [
    '<figure class="product-slider__image"><a class="product-slider__link" href="#"><img class="product-slider__icon" src="img/carousel_images/cabinet.jpg" alt="Wooden Cabinet"/><div class="product-slider__ribbon"><p>Bestseller</p></div></a><a class="product-slider__text" href="#">Snitch Cabinet</a><p class="product-slider__price">$90,00USD</p><button class="product-slider__button" type="button">Add to Cart</button></figure>',
    '<figure class="product-slider__image"><a class="product-slider__link" href="#"><img class="product-slider__icon" src="img/carousel_images/armchair.jpg" alt="Grey Armchair"/></a><a class="product-slider__text" href="#">Lord Armchair</a><p class="product-slider__price">$220,00USD</p><button class="product-slider__button" type="button">Add to Cart</button></figure>',
    '<figure class="product-slider__image"><a class="product-slider__link" href="#"><img class="product-slider__icon" src="img/carousel_images/drawer.jpg" alt="White drawer"/></a><a class="product-slider__text" href="#">Erica Chest of Drawers</a><p class="product-slider__price">$150,00USD</p><button class="product-slider__button" type="button">Add to Cart</button></figure>',
    '<figure class="product-slider__image"><a class="product-slider__link" href="#"><img class="product-slider__icon" src="img/carousel_images/chair.jpg" alt="Green Chair"/></a><a class="product-slider__text" href="#">Ultimate Green Chair</a><p class="product-slider__price">$110,00USD</p><button class="product-slider__button" type="button">Add to Cart</button></figure>',
];

let currentSlideIdx = 0;
let currentScrollPosition = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.product-slider__images');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 1024px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 > slides.length - 1 ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }

    // Update currentScrollPosition here, assuming you are trying to scroll to the next slide
    currentScrollPosition += slideContainer.offsetWidth;

    // Smoothly scroll to the new slide
    slideContainer.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth',
    });
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}

renderSlide();

const buttonNext = document.querySelector('.navigation-button__next');
buttonNext.addEventListener('click', nextSlide);

const buttonPrev = document.querySelector('.navigation-button__previous');
buttonPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);
