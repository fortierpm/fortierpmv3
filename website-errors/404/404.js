//* Dropdown on small-width screen
const hamburger = document.querySelector(".hamburger");
const sitePages = document.querySelector(".site-pages");
const sitePage = document.querySelectorAll(".site-page");
const pageLink = document.querySelectorAll(".page-link");
let burgerToggle = true;
hamburger.addEventListener("click", () => {
    if (burgerToggle) {
        sitePages.classList.add("active-site-pages");
        hamburger.classList.add("active-burger");
    } else {
        sitePages.classList.remove("active-site-pages");
        hamburger.classList.remove("active-burger");
    }
    burgerToggle = !burgerToggle;
});