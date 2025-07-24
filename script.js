"use strict";

// Add active state functionality to navigation links. DOMContentLoaded ensures the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  const navLinks = document.querySelectorAll(".nav__links li a img");

  // Add click event listener to each nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Remove active class from all nav links
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });

      // Add active class to the clicked link
      this.classList.add("active");
    });
  });
});
