export function renderTab(products) {
    let productsDomString = '';
    for (let tab=0; tab < products.length; tab++){
        productsDomString += `<div class="catalog__items">`;
        for (let i = 0; i < products[tab].length; i++) {
            const product = products[tab][i];
            productsDomString += `
                <article class="catalog_item">
                    <a class="catalog__item-img-link" href="#">
                        <img class="catalog__item-img" src="${product.image}" alt="${product.title}">
                    </a>
                    <a class="catalog__item-link" href="#">${product.title}</a>
                    <p class="catalog__item-price">`;
            if (product.oldprice !== null) productsDomString += `<span
                            class="catalog__item-price-old">$${product.oldprice}USD</span>`;
            productsDomString += `<span>$${product.price}USD</span></p>
                    <span class="catalog__item-button">Add to Cart</span>
                </article>
            `;
        };
        productsDomString += `</div>`;
    };       
    const productsContainer = document.querySelector('.new-product__catalog.catalog ');
    productsContainer.innerHTML = productsDomString;
    const activeContainer = document.querySelector('.catalog__items');
    activeContainer.classList.add('active');
}
