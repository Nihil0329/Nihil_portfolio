const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the target element's id from the href attribute
      const targetId = this.getAttribute('href');

      // Use the target id to get the corresponding target element
      const targetElement = document.querySelector(targetId);

      // Scroll to the target element with smooth behavior
      targetElement.scrollIntoView({
        behavior: 'smooth'
        });
    });
});
