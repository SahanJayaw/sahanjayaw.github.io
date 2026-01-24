/* SCROLL REVEAL */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.25 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* PARALLAX HERO IMAGE */
const visual = document.querySelector(".parallax");

document.addEventListener("mousemove", e => {
  if (!visual) return;

  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;

  visual.style.transform = `translate(${x}px, ${y}px)`;
});


