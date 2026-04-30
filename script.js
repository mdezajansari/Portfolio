// ── Project data ─────────────────────────────────────────────
const projects = {
  ecommerce: {
    title: "Ecommerce",
    tag: "Full Stack",
    description:
      "A full-stack eCommerce web application built with React (Vite), Spring Boot, and MySQL. " +
      "It provides a seamless shopping experience with secure authentication, product management, " +
      "and a fully responsive UI.",
    features: [
      "JWT-based authentication with secure login & registration",
      "Product listing, filtering, search, and category browsing",
      "Shopping cart, wishlist, and checkout flow",
      "Admin dashboard for product & order management",
      "Responsive UI built with React + Tailwind CSS",
      "REST API backend powered by Spring Boot & MySQL",
      "Deployed on Netlify (frontend) and Render (backend)",
    ],
    tech: [
      "/images/stack/HTML.png",
      "/images/stack/Tailwind.png",
      "/images/stack/Javascript.svg",
      "/images/stack/react2.png",
      "/images/stack/springboot.png",
      "/images/stack/Mysql.png",
      "/images/stack/netlify.png",
    ],
    github: "https://github.com/mdezajansari/Ecommerce",
    live: "https://shopcherry.netlify.app/",
  },

  ems: {
    title: "Employee Management System",
    tag: "Full Stack",
    description:
      "An end-to-end full-stack solution for managing departments, employee life cycles, " +
      "and administrative workflows. Built with React, Spring Boot, MySQL, and secured " +
      "using Spring Security with JWT and Role-Based Access Control (RBAC).",
    features: [
      "Role-Based Access Control (Admin vs. Employee)",
      "Secure JWT authentication via Spring Security",
      "Employee CRUD: add, update, view, and delete records",
      "Department management and employee assignment",
      "Admin dashboard with attendance & payroll tracking",
      "Read-only Employee Dashboard for standard users",
      "Deployed on Netlify (frontend) and Render (backend)",
    ],
    tech: [
      "/images/stack/HTML.png",
      "/images/stack/CSS.png",
      "/images/stack/Tailwind.png",
      "/images/stack/Javascript.svg",
      "/images/stack/react2.png",
      "/images/stack/springboot.png",
      "/images/stack/Mysql.png",
      "/images/stack/netlify.png",
    ],
    github: "https://github.com/mdezajansari/EmployeeManagementSystem",
    live: "https://ems-ezaj.netlify.app/",
  },

  heritage: {
    title: "Heritage Hub",
    tag: "Frontend",
    description:
      "A responsive web application showcasing UNESCO World Heritage Sites and popular travel " +
      "destinations. Features an intuitive UI, powerful search functionality, and a built-in " +
      "dark mode for a comfortable browsing experience.",
    features: [
      "Browse UNESCO heritage sites by region and category",
      "Search functionality with instant filtering",
      "Dark mode toggle with persistent preference",
      "Responsive design optimised for mobile & desktop",
      "Clean card-based layout with smooth animations",
      "Built with pure HTML, CSS & vanilla JavaScript",
    ],
    tech: [
      "/images/stack/HTML.png",
      "/images/stack/CSS.png",
      "/images/stack/Javascript.svg",
      "/images/stack/Github.svg",
    ],
    github: "https://github.com/mdezajansari/HeritageHub",
    live: "https://mdezajansari.github.io/HeritageHub/",
  },

  gitscout: {
    title: "Git Scout",
    tag: "Frontend",
    description:
      "A responsive web app that lets you search any GitHub username and instantly view " +
      "detailed profile information — repositories, followers, following count, bio, and more — " +
      "all powered by the GitHub REST API.",
    features: [
      "Live GitHub profile search via GitHub REST API",
      "Displays repos, stars, forks, followers & following",
      "Responsive card layout optimised for all screen sizes",
      "Clean, minimal UI with Tailwind CSS",
      "Error handling for invalid or non-existent usernames",
      "Deployed via GitHub Pages",
    ],
    tech: [
      "/images/stack/HTML.png",
      "/images/stack/CSS.png",
      "/images/stack/Javascript.svg",
      "/images/stack/Tailwind.png",
      "/images/stack/Github.svg",
    ],
    github: "https://github.com/mdezajansari/Git-Scout",
    live: "https://mdezajansari.github.io/Git-Scout/",
  },
};

// project section end here

// ── DOM refs ──────────────────────────────────────────────────
const overlay     = document.getElementById("projectModal");
const modalClose  = document.getElementById("modalClose");
const modalTitle  = document.getElementById("modalTitle");
const modalDesc   = document.getElementById("modalDescription");
const modalFeats  = document.getElementById("modalFeatures");
const modalStack  = document.getElementById("modalTechStack");
const modalTag    = document.getElementById("modalTag");
const modalGithub = document.getElementById("modalGithub");
const modalLive   = document.getElementById("modalLive");

// ── Open modal ────────────────────────────────────────────────
function openModal(key) {
  const p = projects[key];
  if (!p) return;

  // Title & tag
  modalTitle.textContent = p.title;
  modalTag.textContent   = p.tag;

  // Description
  modalDesc.textContent = p.description;

  // Features
  modalFeats.innerHTML = p.features
    .map((f) => `<li>${f}</li>`)
    .join("");

  // Tech stack images
  modalStack.innerHTML = p.tech
    .map((src) => `<img src="${src}" alt="" title="${src.split("/").pop().split(".")[0]}">`)
    .join("");

  // Buttons
  if (p.github) {
    modalGithub.href = p.github;
    modalGithub.classList.remove("hidden");
  } else {
    modalGithub.classList.add("hidden");
  }

  if (p.live) {
    modalLive.href = p.live;
    modalLive.classList.remove("hidden");
  } else {
    modalLive.classList.add("hidden");
  }

  // Show
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ── Close modal ───────────────────────────────────────────────
function closeModal() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// ── Event listeners ───────────────────────────────────────────

// "Read More" buttons
document.querySelectorAll(".btn-project[data-project]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();           // don't bubble to project-card
    openModal(btn.dataset.project);
  });
});

// Close button (×)
modalClose.addEventListener("click", closeModal);

// Click outside modal card
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

// ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ── Hamburger menu ───────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

if (hamburger && mobileNav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileNav.classList.toggle("open");
  });

  // Close when a nav link is clicked
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileNav.classList.remove("open");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      hamburger.classList.remove("open");
      mobileNav.classList.remove("open");
    }
  });
}
