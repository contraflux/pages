const body = document.getElementById("body");
const navbar_holder = document.getElementById("navbar-holder");
const navbar_menu = document.getElementById("navbar-menu");
const navbar_dropdown = document.getElementById("navbar-dropdown");

let navbar_top = 0;
let dropdown_top = -200;

// Fade-in effect on page load
window.addEventListener("DOMContentLoaded", () => {
    body.style.opacity = 1;
});

// Navbar hiding
document.addEventListener("wheel", (e) => {
    // At the top, the navbar should be fixed
    if (window.scrollY == 0) {
        navbar_holder.style.position = "absolute";
        navbar_top = 0;
    // Otherwise it depends on scroll direction
    } else {
        navbar_holder.style.position = "fixed";
        // If scrolling down, hide the navbar
        if (e.deltaY > 0 && window.scrollY > 180) {
            navbar_top = -60;
        // If scrolling up, show the navbar
        } else {
            navbar_top = 0;
        }
    }
    navbar_holder.style.top = navbar_top + "px";
    dropdown_top = -200;
    navbar_dropdown.style.top = dropdown_top + "px";
})

navbar_menu.addEventListener('click', () => {
    console.log('clicked');
    if (dropdown_top == 60) {
        dropdown_top = -200;
    } else {
        dropdown_top = 60;
    }
    navbar_dropdown.style.top = dropdown_top + "px";
    console.log(navbar_dropdown.style.top);
});