window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, 0.5)"; // Slightly visible when scrolling
    } else {
        header.style.background = "rgba(0, 0, 0, 0)"; // Fully transparent at the top
    }
});
