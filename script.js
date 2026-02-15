document.documentElement.classList.add("js");

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const filterButtons = document.querySelectorAll(".chip[data-filter]");
const projects = document.querySelectorAll(".project[data-tags]");

function applyFilter(tag) {
  projects.forEach((project) => {
    const tags = project.dataset.tags || "";
    const show = tag === "all" || tags.includes(tag);
    project.hidden = !show;
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tag = button.dataset.filter || "all";

    filterButtons.forEach((btn) => {
      const active = btn === button;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    applyFilter(tag);
  });
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-nav a[href^='#']");

if (sections.length > 0 && navLinks.length > 0 && "IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          if (isCurrent) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0.01,
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}