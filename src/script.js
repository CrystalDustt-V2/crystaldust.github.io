const navToggle = document.getElementById('nav-toggle');
const navbar = document.querySelector('.navbar');

  navToggle.addEventListener('click', () => {
    // Toggle the visibility of the navbar
    navbar.classList.toggle('visible');
    
    // Adjust the button's position and arrow icon based on the navbar's visibility
    if (navbar.classList.contains('visible')) {
      navToggle.style.top = '100px'; // Moves the button down with the navbar
      navToggle.textContent = '▲'; // Change arrow to up
    } else {
      navToggle.style.top = '1px'; // Reset button position when navbar is hidden
      navToggle.textContent = '▼'; // Change arrow to down
    }
  });