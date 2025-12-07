document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const navbar = document.querySelector(".navbar");

function toggleStickyNavbar() {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", toggleStickyNavbar);

const projectButtons = document.querySelectorAll(".view-btn");

projectButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log("Navigating to project - " + this.getAttribute("href"));
  });
});

const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function (e) {
  console.log("Form submitted. Redirecting to Formspree action...");
});

const skillCards = document.querySelectorAll(".skill-card");

const observerOptions = {
  threshold: 0.2,
};

const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

skillCards.forEach((card, index) => {
  card.style.animationDelay = $(index * 0.1);
  skillObserver.observe(card);
});
