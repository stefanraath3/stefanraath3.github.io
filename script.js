// Enhanced Smooth Scroll Functionality
document.addEventListener("DOMContentLoaded", function() {
  let anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          let targetId = this.getAttribute('href').substring(1);
          let targetElement = document.getElementById(targetId);
          let targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          let startPosition = window.pageYOffset;
          let distance = targetPosition - startPosition;
          let duration = 1000;
          let startTime = null;

          function animation(currentTime) {
              if (startTime === null) startTime = currentTime;
              let timeElapsed = currentTime - startTime;
              let run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
              window.scrollTo(0, run);
              if (timeElapsed < duration) requestAnimationFrame(animation);
          }

          function easeInOutQuad(t, b, c, d) {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
          }

          requestAnimationFrame(animation);
      });
  });
});

