// Header Navigation 
const toggleNavButton = document.querySelector(".bi-list");
const navBar = document.querySelector("ul");

toggleNavButton.addEventListener("click", () => {
  toggleNavButton.classList.toggle("bi-x-lg");
  navBar.classList.toggle("active");
});


// Footer 
const footerP = document.querySelector('.footer-p');
let year = new Date().getFullYear();

footerP.textContent = `fllp.dev ${year}`;