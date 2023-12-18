const burgerBtn = document.getElementById("burger-menu");
const burgerMenuContent = document.querySelectorAll(".main-list li");

let isOpen = false;
burgerBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    burgerMenuContent.forEach((li) => {
        li.classList.toggle("hamburger-content");
    });
})