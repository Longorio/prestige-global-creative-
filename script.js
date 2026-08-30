// ========================================
// PRESTIGE GLOBAL CREATIVE
// PORTFOLIO FILTER
// ========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");

        // Get selected category
        const filter = button.getAttribute("data-filter");

        // Filter projects
        portfolioItems.forEach(function (item) {

            const category = item.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// =========================
// PORTFOLIO IMAGE LIGHTBOX
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const portfolioItems = document.querySelectorAll(".portfolio-item");

    // Create lightbox
    const lightbox = document.createElement("div");
    lightbox.className = "portfolio-lightbox";

    lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>

        <button class="lightbox-prev">&#10094;</button>

        <div class="lightbox-content">
            <img src="" alt="Portfolio Preview">
            <h3></h3>
        </div>

        <button class="lightbox-next">&#10095;</button>
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector("img");
    const lightboxTitle = lightbox.querySelector("h3");
    const closeButton = lightbox.querySelector(".lightbox-close");
    const prevButton = lightbox.querySelector(".lightbox-prev");
    const nextButton = lightbox.querySelector(".lightbox-next");

    let currentIndex = 0;

    const items = Array.from(portfolioItems);

    function openLightbox(index) {

        currentIndex = index;

        const item = items[currentIndex];
        const image = item.querySelector("img");
        const title = item.querySelector("h3");

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxTitle.textContent = title.textContent;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";
    }

    function showNext() {

        currentIndex++;

        if (currentIndex >= items.length) {
            currentIndex = 0;
        }

        openLightbox(currentIndex);
    }

    function showPrevious() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = items.length - 1;
        }

        openLightbox(currentIndex);
    }

    // Open image when portfolio item is clicked
    portfolioItems.forEach((item, index) => {

        item.style.cursor = "pointer";

        item.addEventListener("click", () => {
            openLightbox(index);
        });

    });

    // Buttons
    closeButton.addEventListener("click", closeLightbox);

    nextButton.addEventListener("click", showNext);

    prevButton.addEventListener("click", showPrevious);

    // Click outside image to close
    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

    // Keyboard controls
    document.addEventListener("keydown", (event) => {

        if (!lightbox.classList.contains("active")) return;

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowRight") {
            showNext();
        }

        if (event.key === "ArrowLeft") {
            showPrevious();
        }

    });

});


// ========================================
// WEBSITE LOADED
// ========================================

console.log(
    "Prestige Global Creative is working."
);
