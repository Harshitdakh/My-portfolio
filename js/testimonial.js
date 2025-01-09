document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    let currentIndex = 0;
  
    const showTestimonial = (index) => {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle("active", i === index);
      });
    };
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    });
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    });
  
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }, 2000);
  });
  