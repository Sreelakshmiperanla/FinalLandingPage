document.addEventListener('DOMContentLoaded', () => {
  // Add animation to elements when the document is ready
  const welcomeText = document.getElementById('welcome-text');
  const subtitle = document.getElementById('subtitle');
  const joinNowButton = document.querySelector('.join-now-button');
  
  // Animation delays
  const fadeInDelay = 2000; // 2 seconds

  function animateElements() {
      setTimeout(() => {
          welcomeText.style.opacity = 1;
      }, fadeInDelay);

      setTimeout(() => {
          subtitle.style.opacity = 1;
      }, fadeInDelay + 2000);

      setTimeout(() => {
          joinNowButton.style.opacity = 1;
      }, fadeInDelay + 4000);
  }

  animateElements();
});

