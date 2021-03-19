//* Parallax function
function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", () => {
    parallax(".foreground", window.scrollY, -1.3);
    parallax(".background", window.scrollY, -0.1);
    parallax(".intro-text", window.scrollY, -0.78);
});

//* Typing function
//! "web design" contains (and requires for intended appearance) 
//! a hard en space; use hard en for all phrase spaces
// TODO: create space to en-space converter
const phrases = ["photography", "web design", "graphics"];
let phraseIndex = 0; // = first phrase
let letterIndex = 0; // = first letter
let currentText = "";
let letters = "";
// iife: typing function
(function typing() {
    if (phraseIndex === phrases.length) {
        phraseIndex = 0; // reset counter
    }

    currentText = phrases[phraseIndex];
    letters = currentText.slice(0, ++letterIndex); // assigns first (0) to [letterIndex] value letters

    document.querySelector(".typing").textContent = letters;
    if (letters.length === currentText.length) {
        phraseIndex++; // next phrase
        letterIndex = 0; // reset index
    }
    setTimeout(typing, 400);
}());


//* Hide Intro Page Items on Scroll
const scrollDown = document.querySelector(".scroll-down");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
        scrollDown.classList.add("scroll-hidden-left");
    } else {
        scrollDown.classList.remove("scroll-hidden-left");
    }
});

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

//* Hide Contact button
const contact = document.querySelector(".contact");
const footer = document.querySelector("footer");
const contactJump = document.querySelector(".contact-jump");
window.addEventListener("scroll", () => {
    let offsetLength = contact.scrollHeight + footer.scrollHeight + 500;
    if (window.scrollY >= (document.body.scrollHeight - offsetLength)) {
        contactJump.classList.add("scroll-hidden-right");
    } else {
        contactJump.classList.remove("scroll-hidden-right");
    }
});

//* SLIDERS SECTION
// Photos
const photosSlider = document.querySelector("#photosSlider");
const photosSlides = document.querySelectorAll("#photosSlider .carousel-slide");
const photosSlideLeft = document.querySelector("#photosSlideLeft");
const photosLeftSymbol = document.querySelector("#photosSlideLeft i");
const photosSlideRight = document.querySelector("#photosSlideRight");
const photosRightSymbol = document.querySelector("#photosSlideRight i");
let photosCounter = 0;
const photosSlideWidth = photosSlider.clientWidth / photosSlides.length;
photosSlideLeft.addEventListener("click", () => {
    if (photosCounter > 0) {
        photosSlider.style.transition = "transform 0.4s ease-in-out";
        photosCounter--;
        photosSlider.style.transform = "translateX(" + (-photosSlideWidth * photosCounter) + "px)";
    }
});
photosSlideRight.addEventListener("click", () => {
    if (photosCounter < photosSlides.length - 1) {
        photosSlider.style.transition = "transform 0.4s ease-in-out";
        photosCounter++;
        photosSlider.style.transform = "translateX(" + (-photosSlideWidth * photosCounter) + "px)";
    }
});
photosSlider.addEventListener("transitionend", () => {
    if (photosCounter != 0 && photosCounter != photosSlides.length - 1) {
        photosLeftSymbol.classList.remove("inactive");
        photosRightSymbol.classList.remove("inactive");
        photosSlideLeft.style.pointerEvents = "auto";
        photosSlideRight.style.pointerEvents = "auto";
    } else if (photosCounter == 0) {
        photosLeftSymbol.classList.add("inactive");
        photosRightSymbol.classList.remove("inactive");
        photosSlideLeft.style.pointerEvents = "none";
        photosSlideRight.style.pointerEvents = "auto";
    } else if (photosCounter == photosSlides.length - 1) {
        photosRightSymbol.classList.add("inactive");
        photosLeftSymbol.classList.remove("inactive");
        photosSlideLeft.style.pointerEvents = "auto";
        photosSlideRight.style.pointerEvents = "none";
    }
});
// Graphics
const graphicsSlider = document.querySelector("#graphicsSlider");
const graphicsSlides = document.querySelectorAll("#graphicsSlider .carousel-slide");
const graphicsSlideLeft = document.querySelector("#graphicsSlideLeft");
const graphicsLeftSymbol = document.querySelector("#graphicsSlideLeft i");
const graphicsSlideRight = document.querySelector("#graphicsSlideRight");
const graphicsRightSymbol = document.querySelector("#graphicsSlideRight i");
let graphicsCounter = 0;
const graphicsSlideWidth = graphicsSlider.clientWidth / graphicsSlides.length;
graphicsSlideLeft.addEventListener("click", () => {
    if (graphicsCounter > 0) {
        graphicsSlider.style.transition = "transform 0.4s ease-in-out";
        graphicsCounter--;
        graphicsSlider.style.transform = "translateX(" + (-graphicsSlideWidth * graphicsCounter) + "px)";
    }
});
graphicsSlideRight.addEventListener("click", () => {
    if (graphicsCounter < graphicsSlides.length - 1) {
        graphicsSlider.style.transition = "transform 0.4s ease-in-out";
        graphicsCounter++;
        graphicsSlider.style.transform = "translateX(" + (-graphicsSlideWidth * graphicsCounter) + "px)";
    }
});
graphicsSlider.addEventListener("transitionend", () => {
    if (graphicsCounter != 0 && graphicsCounter != graphicsSlides.length - 1) {
        graphicsLeftSymbol.classList.remove("inactive");
        graphicsRightSymbol.classList.remove("inactive");
        graphicsSlideLeft.style.pointerEvents = "auto";
        graphicsSlideRight.style.pointerEvents = "auto";
    } else if (graphicsCounter == 0) {
        graphicsLeftSymbol.classList.add("inactive");
        graphicsRightSymbol.classList.remove("inactive");
        graphicsSlideLeft.style.pointerEvents = "none";
        graphicsSlideRight.style.pointerEvents = "auto";
    } else if (graphicsCounter == graphicsSlides.length - 1) {
        graphicsRightSymbol.classList.add("inactive");
        graphicsLeftSymbol.classList.remove("inactive");
        graphicsSlideLeft.style.pointerEvents = "auto";
        graphicsSlideRight.style.pointerEvents = "none";
    }
});

