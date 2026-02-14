const content = document.getElementById("content");
const navbar = document.getElementById("navbar")
const navbar_toggle = document.getElementById("navbar-toggle");
const navbar_toggle_1 = document.getElementById("navbar-toggle-1");
const navbar_toggle_2 = document.getElementById("navbar-toggle-2");
const navbar_toggle_3 = document.getElementById("navbar-toggle-3");
const navbar_dropdown = document.getElementById("navbar-dropdown");
let navbar_state = false;

// Setup
navbar_dropdown.style.top = -navbar_dropdown.offsetHeight + 75 + "px";

// Event listeneers
window.addEventListener("DOMContentLoaded", () => {
    content.style.opacity = 1;
});

window.addEventListener('resize', (e) => {
    if (window.innerWidth > 800) {
        hideNavbarDropdown();
    }
});

document.addEventListener("wheel", (e) => {
    if (window.scrollY == 0) {
        navbar.style.position = "absolute"
    } else {
        navbar.style.position = "fixed";
    }
    hideNavbarDropdown();
})

navbar_toggle.addEventListener("click", (e) => {
    if (navbar_state) {
        hideNavbarDropdown();
    } else {
        showNavbarDropdown();
    }
});

function showNavbarDropdown() {
    navbar_dropdown.style.opacity = 1;
    navbar_dropdown.style.top = 75 + "px";
    navbar_state = true;
    navbar_toggle_1.style.transform = "translate(0, 11px) rotate(-45deg)";
    navbar_toggle_2.style.opacity = 0;
    navbar_toggle_2.style.transform = "translate(100px, 0)";
    navbar_toggle_3.style.transform = "translate(0, -11px) rotate(45deg)";
}

function hideNavbarDropdown() {
    navbar_dropdown.style.opacity = 1;
    navbar_dropdown.style.top = -navbar_dropdown.offsetHeight + 75 + "px";
    navbar_state = false;
    navbar_toggle_1.style.transform = "translate(0, 0) rotate(0deg)";
    navbar_toggle_2.style.opacity = 1;
    navbar_toggle_2.style.transform = "translate(0, 0)";
    navbar_toggle_3.style.transform = "translate(0, 0) rotate(0deg)";
}