const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, {
  rootMargin: "0px 0px -150px 0px"
});

document.querySelectorAll(".year").forEach(el => {
  observer.observe(el);
});