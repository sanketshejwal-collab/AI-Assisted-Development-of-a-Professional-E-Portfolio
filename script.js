// ==========================================
// SMOOTH JUMP-DOWN BUTTON
// ==========================================

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {

    const aboutSection = document.getElementById("about");

    aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// ==========================================
// SMOOTH NAVIGATION
// ==========================================

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const sectionID =
            this.getAttribute("href");

        const target =
            document.querySelector(sectionID);

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(function(element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ==========================================
// BUTTON CLICK EFFECT
// ==========================================

exploreBtn.addEventListener("click", function() {

    this.innerHTML =
        'Exploring... <i class="fa-solid fa-spinner fa-spin"></i>';

    setTimeout(() => {

        this.innerHTML =
            'Explore My Portfolio <i class="fa-solid fa-arrow-down"></i>';

    }, 1200);

});