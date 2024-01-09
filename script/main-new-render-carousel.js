export function renderReview(reviews) {
    let reviewDomString = '';
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        reviewDomString += `
        <article class="new-product__review-item">
            <div>
                <img class="new-product__review-item-foto" src="${review.foto}" alt="Foto ${review.name}">
                <em class="new-product__review-item-text">"${review.text}"</em>
                <p class="new-product__review-item-name">- ${review.name} -</p>
            </div>
        </article>
        `;
    };
    const reviewContainer = document.querySelector('.new-product__review');
    reviewContainer.innerHTML = reviewDomString;
}
