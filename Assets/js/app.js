//Hamburger Menu
const burgerBtn = document.getElementById("burger-menu");
const burgerMenuContent = document.querySelectorAll(".main-list li");

let isOpen = false;
burgerBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  burgerMenuContent.forEach((li) => {
    li.classList.toggle("hamburger-content");
  });
});

const vrGalleryArray = [
  "Image-03.jpg",
  "Image-05.jpg",
  "Image-06.jpg",
  "Image-07.jpg",
  "Image-08.jpg",
  "Image-09.jpg",
];

const baseUrl = "./Assets/images/";

const galleryFigure = document.getElementById("vr-gallery");

const createVrGallery = () => {
  vrGalleryArray.forEach((img) => {
    const galleryImage = document.createElement("img");
    const galleryImageSovs = baseUrl + img;
    galleryImage.src = galleryImageSovs;

    galleryFigure.appendChild(galleryImage);

    const openModal = () => {
      const modalFigure = document.createElement("figure");
      modalFigure.classList.add("modal-figure");
      const modalImage = galleryImage.cloneNode(true);

      modalFigure.appendChild(modalImage);

      modalFigure.addEventListener("click", () => {
        modalFigure.remove();
      });
    };

    galleryImage.addEventListener("click", openModal);
  });
};

window.addEventListener("load", createVrGallery);
