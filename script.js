const gallerys = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox"); 
const closeBtn = document.querySelector("#close-btn"); 
const lightboxImage = document.querySelector("#lightbox-image");

gallerys.forEach((item) => {
    item.addEventListener("click", () => {
        lightbox.classList.add("show");
        lightboxImage.src = item.src;
    })
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (event) => {
    // Only close if clicking the lightbox background, not the image
    if (event.target === lightbox) {
        lightbox.classList.remove("show");
    }
});