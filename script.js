"use strict";

// // This tells the browser: “Don’t run this code until the entire HTML document has loaded.” It prevents errors that would happen if JavaScript tries to access elements that don’t exist yet.
// document.addEventListener("DOMContentLoaded", function () {
//   // Get all navigation links
//   const navLinks = document.querySelectorAll(".nav__links a, .category a");

//   // This finds all <a> (anchor) elements inside an element with the class .nav__links. querySelectorAll returns a NodeList (similar to an array).
//   navLinks.forEach((link) => {
//     //When a user clicks a nav link, this function runs. e (event) contains info about the click (not used here, but available).
//     link.addEventListener("click", function (e) {
//       // Remove active class from all nav links
//       navLinks.forEach((navLink) => {
//         navLink.classList.remove("active");
//       });
//       // Add active class to the clicked link
//       this.classList.add("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Select ALL links you want to participate
  const links = document.querySelectorAll(".nav__links a, .category a");

  const currentPath = window.location.pathname;

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const linkPath = new URL(link.href).pathname;

      if (linkPath === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});
