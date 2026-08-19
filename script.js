// =========================
// PORTFOLIO JAVASCRIPT
// =========================

// Page loaded message
window.addEventListener("load", function () {
    console.log("Welcome to Likhitha's Portfolio!");
});


// =========================
// SMOOTH NAVIGATION
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {

            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });

});


// =========================
// CURRENT YEAR
// =========================

const yearElement = document.querySelector("footer p");

if (yearElement) {
    yearElement.textContent =
        "© " + new Date().getFullYear() +
        " Likhitha. All Rights Reserved.";
}