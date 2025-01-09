document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".gallery-slider");
    const images = document.querySelectorAll(".gallery-image");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    
    let currentIndex = 0;
  
    const updateSliderPosition = () => {
      const offset = -currentIndex * 602
      ; // Adjust based on image width
      slider.style.transform = `translateX(${offset}px)`;
    };
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSliderPosition();
    });
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSliderPosition();
    });
  });
  