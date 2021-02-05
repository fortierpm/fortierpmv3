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
        if (window.scrollY !== 0) {
            scrollDown.classList.add("scroll-hidden");
        } else {
            scrollDown.classList.remove("scroll-hidden");
        }
    });
