const content = document.getElementById("content");
const navbar = document.getElementById("navbar")

window.addEventListener("DOMContentLoaded", () => {
    content.style.opacity = 1;
});

document.addEventListener("wheel", (e) => {
    console.log(window.scrollY);
    if (window.scrollY == 0) {
        navbar.style.position = "absolute"
    } else {
        navbar.style.position = "fixed";
    }
})