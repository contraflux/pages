sidebar = document.getElementById("sidebar")
sidesubbar = document.getElementById("sidesubbar")

window.addEventListener("scroll", (e) => {
    if (window.scrollY == 0) {
        sidebar.style.position = "absolute";
        sidesubbar.style.position = "absolute";
    } else {
        sidebar.style.position = "fixed";
        sidesubbar.style.position = "fixed";
    }
})