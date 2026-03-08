document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });

  /* CLOSE MENU WHEN A LINK IS CLICKED */
  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });
  });
});


const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
    // remove active class
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    
    // add active class to clicked
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || category === filterValue) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});



const latitude = "INSERT_LATITUDE";
const longitude = "INSERT_LONGITUDE";

const map = document.getElementById("googleMap");
const directionBtn = document.getElementById("directionBtn");

map.src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

directionBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;