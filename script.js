const typedText = document.getElementById("typed-text");
const phrases = [
  "Creative Designer",
  "AI Visual Specialist",
  "Brand Storyteller",
  "AI Video Editor",
  "Visual Problem Solver"
];

let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";
let isDeleting = false;
let typingSpeed = 120;

function typeLoop() {
  currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typedText.textContent = currentPhrase.substring(0, letterIndex--);
  } else {
    typedText.textContent = currentPhrase.substring(0, letterIndex++);
  }

  if (!isDeleting && letterIndex === currentPhrase.length + 1) {
    isDeleting = true;
    setTimeout(typeLoop, 1000); // pause before deleting
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeLoop, 300); // pause before typing next phrase
  } else {
    setTimeout(typeLoop, isDeleting ? typingSpeed / 2 : typingSpeed);
  }
}

// Start typing on page load
document.addEventListener("DOMContentLoaded", typeLoop);

/* Scroll reveal */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal, .reveal-right").forEach(el => observer.observe(el));

/* Parallax hero image */
const parallax = document.querySelector(".parallax");
document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;
  if (parallax) parallax.style.transform = `translate(${x}px, ${y}px)`;
});

/* ------------------------------ */
/* CUSTOM CURSOR FOLLOW           */
/* ------------------------------ */
const cursor = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

/* TICK SOUND ON BUTTON HOVER */
const tickBtn = document.querySelector(".btn");
const tickSound = new Audio("assets/tick.mp3");

tickSound.volume = 0.25; // subtle

if (tickBtn) {
  tickBtn.addEventListener("mouseenter", () => {
    tickSound.currentTime = 0; // restart if hover again quickly
    tickSound.play();
  });
}






