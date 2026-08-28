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


// ========================================
// PORTFOLIO IMAGE PREVIEW
// ========================================

portfolioItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image = item.querySelector("img");

        if (!image) {
            return;
        }

        // Create preview
        const preview = document.createElement("div");

        preview.className = "image-preview";

        preview.innerHTML = `
            <div class="preview-box">
                <button class="preview-close">&times;</button>
                <img src="${image.src}" alt="${image.alt}">
            </div>
        `;

        document.body.appendChild(preview);

        // Close button
        const closeButton =
            preview.querySelector(".preview-close");

        closeButton.addEventListener("click", function () {
            preview.remove();
        });

        // Click outside image
        preview.addEventListener("click", function (event) {

            if (event.target === preview) {
                preview.remove();
            }

        });

        // ESC key
        document.addEventListener("keydown", function closeWithEsc(event) {

            if (event.key === "Escape") {

                preview.remove();

                document.removeEventListener(
                    "keydown",
                    closeWithEsc
                );

            }

        });

    });

});


// ========================================
// WEBSITE LOADED
// ========================================

console.log(
    "Prestige Global Creative is working."
);