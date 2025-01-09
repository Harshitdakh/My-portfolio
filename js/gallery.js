document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeBtn = document.querySelector(".close");
  
    galleryImages.forEach((image) => {
      image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
      });
    });
  
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImage) {
        lightbox.style.display = "none";
      }
    });
  });
  