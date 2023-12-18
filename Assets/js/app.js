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

//Gallery
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
      galleryFigure.appendChild(modalFigure);

      modalFigure.addEventListener("click", () => {
        modalFigure.remove();
      });
    };

    galleryImage.addEventListener("click", openModal);
  });
};

window.addEventListener("load", createVrGallery);

//Get Started Form Validaiton
const startForm = document.getElementById("getStarted");

const emailElement = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");

const errorTextContainer = document.getElementById("errorMessage");

const validateInput = (input, regEx, errorMessage) => {
  const emailInput = input.value;
  const isValid = regEx.test(emailInput);

  if (isValid) {
    console.log("Form valid");
  } else {
    displayErrorMessage(errorMessage);
  }

  return isValid;
};

const displayErrorMessage = (message) => {
  errorTextContainer.textContent = message;
};

const emailFormValidation = (e) => {
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  const isEmailValid = validateInput(
    emailElement,
    emailRegExp,
    "Email must be valid"
  );

  if (!isEmailValid) {
    e.preventDefault();
  }
};

startForm.addEventListener("submit", emailFormValidation);
