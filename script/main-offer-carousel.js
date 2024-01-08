
    let currentIndex = 0;
    const items = document.querySelectorAll('.product-slider__image');
    const totalItems = items.length;
    const itemsToShow = 3;  // Number of items to show at a time

    function nextSlide() {
        if (currentIndex < totalItems - itemsToShow) {
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
        const containerWidth = document.querySelector('.product-slider__container').offsetWidth;
        const itemWidth = containerWidth / itemsToShow;
        const newPosition = -currentIndex * itemWidth + 'px';
        document.querySelector('.product-slider__images').style.transform = 'translateX(' + newPosition + ')';
    }

    // Adjust the transition property when resizing
    window.addEventListener('resize', () => {
        const containerWidth = document.querySelector('.product-slider__container').offsetWidth;
        const itemWidth = containerWidth / itemsToShow;
        const transitionDuration = (totalItems / itemsToShow) * 0.5 + 's'; // Assuming 0.5s per item

        document.querySelector('.product-slider__images').style.transition = `transform ${transitionDuration} ease-in-out`;
        items.forEach(item => {
            item.style.width = itemWidth + 'px';
        });

        updateSlider();
    });

    // Initial update
    updateSlider();

