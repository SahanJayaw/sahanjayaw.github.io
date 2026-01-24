/* SCROLL REVEAL */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal, .reveal-right")
  .forEach(el => observer.observe(el));

/* PARALLAX IMAGE */
const parallax = document.querySelector(".parallax");

document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  if (parallax) {
    parallax.style.transform = `translate(${x}px, ${y}px)`;
  }
});


