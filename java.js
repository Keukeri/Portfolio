document.addEventListener("DOMContentLoaded", function() {
    let overlay = document.querySelector(".overlay");

    if (overlay) {
        setTimeout(() => {
            overlay.classList.add("show"); // Active l'animation
        }, 500); // Délai avant l'animation
    }
});