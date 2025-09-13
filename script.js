/* ===== 3D Particles Background ===== */
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00e0ff" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00e0ff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

/* ===== Scroll Reveal Animations ===== */
ScrollReveal().reveal('section h2', {
  duration: 1000,
  origin: 'top',
  distance: '40px'
});

ScrollReveal().reveal('.skills-container div, .project-card, .exp-card', {
  duration: 1200,
  origin: 'bottom',
  distance: '50px',
  interval: 200
});

ScrollReveal().reveal('#about p, #contact p', {
  duration: 1200,
  origin: 'left',
  distance: '60px'
});

/* ===== Hero Typing Animation ===== */
const typingText = ["AI Engineer", "ML Developer", "Chatbot Creator"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const speed = 150;
const typingElement = document.getElementById("typing");

function type() {
  if (i >= typingText.length) i = 0;
  const fullText = typingText[i];

  if (!isDeleting) {
    currentText = fullText.substring(0, j + 1);
    j++;
    typingElement.innerHTML = currentText;
    if (currentText === fullText) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    currentText = fullText.substring(0, j - 1);
    j--;
    typingElement.innerHTML = currentText;
    if (currentText === "") {
      isDeleting = false;
      i++;
    }
  }
  setTimeout(type, speed);
}

type();

/* ===== Lottie Hero Animation ===== */
const heroAnimation = lottie.loadAnimation({
  container: document.getElementById('lottie-hero'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json' // example AI animation
});
