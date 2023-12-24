const contentTabSofas = [
    {
        id: '1',
        title: 'George Sofa',
        image: 'img/catalog/sofas/sofa_1.jpeg',
        oldprice: '',
        price: '100.00'
    },
    {
        id: '2',
        title: 'Bubbles Sofa',
        image: 'img/catalog/sofas/sofa_2.jpeg',
        oldprice: '',
        price:'310.00'
    },
    {
        id: '3',
        title: 'Delar Sofa',
        image: 'img/catalog/sofas/sofa_3.jpeg',
        oldprice: '',
        price: '350.00'
    },
    {
        id: '4',
        title: 'Angela Sofa',
        image: 'img/catalog/sofas/sofa_4.jpeg',
        oldprice: '',
        price: '330.00'
    },
];

function renderTab(products) {
    let productsDomString = '';
    console.log(products.length);
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productsDomString += `
        < article class="catalog_item" >
        <a class="catalog__item-img-link" href="#">
            <img class="catalog__item-img" src="${product.image}" alt="${product.title}">
        </a>
        <a class="catalog__item-link" href="#">${product.title}</a>
        <p class="catalog__item-price"><span class="catalog__item-price-old">$${product.price}</span>
        <span>$${product.price}USD</span></p>
        <span class="catalog__item-button">Add to Cart</span>
        </article >` ;
    };
    console.log(productsDomString); 
    const productsContainer = document.querySelector('.catalog__items');
    productsContainer.innerHTML = productsDomString;
}

renderTab(contentTabSofas);