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

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
