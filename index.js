// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Form submission handling
const hireForm = document.getElementById("hire-form");
if (hireForm) {
  hireForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(hireForm);
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    // In a real application, you would send this data to a server
    console.log("Form submitted with data:", formDataObj);

    // Show success message
    const formContainer = document.querySelector(".contact-form-container");
    formContainer.innerHTML = `
      <div class="success-message">
        <i class="fas fa-check-circle" style="font-size: 3rem; color: #10b981; margin-bottom: 1rem;"></i>
        <h3>Thank You!</h3>
        <p>Your request has been submitted successfully. I will get back to you within 24-48 hours.</p>
        <button class="btn primary-btn" onclick="location.reload()" style="margin-top: 1.5rem;">Send Another Request</button>
      </div>
    `;
  });
}

// Add animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  // Add scroll animation to elements
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".skill-card, .timeline-item, .contact-item"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = element.classList.contains("skill-card")
          ? "translateY(0)"
          : "translateX(0)";
      }
    });
  };

  // Set initial state for animation
  const elementsToAnimate = document.querySelectorAll(
    ".skill-card, .timeline-item, .contact-item"
  );
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    if (element.classList.contains("skill-card")) {
      element.style.transform = "translateY(50px)";
    } else {
      element.style.transform = "translateX(50px)";
    }
  });

  // Run animation on load and scroll
  animateOnScroll();
  window.addEventListener("scroll", animateOnScroll);
});
