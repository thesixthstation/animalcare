window.addEventListener("load", () => {
  // Preloader
  const preloader = document.querySelector(".js-preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  }
});

// Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggler = document.querySelector(".js-nav-toggler");
  const nav = document.querySelector(".js-nav");

  function navToggle() {
    if (nav && navToggler) {
      nav.classList.toggle("active");
      navToggler.classList.toggle("active");
    }
  }

  if (navToggler && nav) {
    navToggler.addEventListener("click", navToggle);

    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target) && !navToggler.contains(event.target)) {
        nav.classList.remove("active");
        navToggler.classList.remove("active");
      }
    });
  }

  // Theme Toggle
  const switcherBtn = document.querySelector(".js-switcher-btn");
  if (switcherBtn) {
    const icon = switcherBtn.querySelector("i");

    function updateThemeIcon() {
      if (document.body.classList.contains("dark")) {
        icon.classList.replace("fa-moon", "fa-sun");
      } else {
        icon.classList.replace("fa-sun", "fa-moon");
      }
    }

    switcherBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
      updateThemeIcon();
    });

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
    updateThemeIcon();
  }
});
