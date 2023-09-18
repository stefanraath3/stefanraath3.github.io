// Smooth Scroll Functionality
document.addEventListener("DOMContentLoaded", function() {
  let anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          let targetId = this.getAttribute('href').substring(1);
          let targetElement = document.getElementById(targetId);
          let targetPosition = targetElement.getBoundingClientRect().top;
          let startPosition = window.pageYOffset;
          let distance = targetPosition - startPosition;
          let startTime = null;

          function animation(currentTime) {
              if (startTime === null) startTime = currentTime;
              let timeElapsed = currentTime - startTime;
              let run = ease(timeElapsed, startPosition, distance, 500);
              window.scrollTo(0, run);
              if (timeElapsed < 500) requestAnimationFrame(animation);
          }

          function ease(t, b, c, d) {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
          }

          requestAnimationFrame(animation);
      });
  });
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      let formObject = {};
      
      formData.forEach((value, key) => {
          formObject[key] = value;
      });
      
      console.log('Form Data Submitted:', formObject);
  });
});

