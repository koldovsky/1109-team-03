function shuffleContainers() {
    const container = document.querySelector('.passion-menu__goods-menu');
    const items = document.querySelectorAll('.goods-menu__item');
    const shuffledItems = Array.from(items).sort(() => Math.random() - 0.5);

    container.innerHTML = ''; 

    shuffledItems.forEach(item => {
        container.appendChild(item);
    });
}

setInterval(shuffleContainers, 1000);