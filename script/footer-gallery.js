const images = document.querySelectorAll(".section__instagram-images img");
const modalGallery = document.querySelector(".modal-gallery");
const modalImage = document.querySelector(".modal-gallery__img");
const modalText = document.querySelector(".modal-gallery__text");
const close = document.querySelector(".modal-gallery__close");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImage.src = image.src;
    modalText.innerHTML = image.alt;
    modalGallery.classList.add("appear");

    modalGallery.addEventListener("click", () => {
      modalGallery.classList.remove("appear");
    });
  });
});
