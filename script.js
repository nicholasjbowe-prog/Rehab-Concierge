// year
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// mobile nav
const toggle = document.querySelector(".nav__toggle");
const mobile = document.querySelector(".nav__mobile");
if (toggle && mobile) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    mobile.hidden = isOpen;
  });
}

// library search/filter (only runs on library page)
const search = document.querySelector("#search");
const filter = document.querySelector("#filter");
const resources = document.querySelectorAll(".resource");

function applyLibraryFilters() {
  const q = (search?.value || "").trim().toLowerCase();
  const f = filter?.value || "all";

  resources.forEach(card => {
    const tags = (card.getAttribute("data-tags") || "").toLowerCase();
    const text = (card.textContent || "").toLowerCase();

    const matchesQuery = !q || tags.includes(q) || text.includes(q);
    const matchesFilter = f === "all" || tags.includes(f);

    card.style.display = (matchesQuery && matchesFilter) ? "" : "none";
  });
}

if (search) search.addEventListener("input", applyLibraryFilters);
if (filter) filter.addEventListener("change", applyLibraryFilters);
