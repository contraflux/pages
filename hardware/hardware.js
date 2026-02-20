const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    rootMargin: "0px 0px -250px 0px",
  },
);

document.querySelectorAll(".year").forEach((el) => {
  observer.observe(el);
});

const line = document.getElementById("line");

line.style.height = window.innerHeight - 330 + window.scrollY + "px";
document.addEventListener("wheel", (e) => {
  line.style.height = window.innerHeight - 330 + window.scrollY + "px";
});

window.addEventListener("resize", (e) => {
  line.style.height = window.innerHeight - 330 + window.scrollY + "px";
});
