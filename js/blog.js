// blog.js
const dessertImage = document.getElementById("dessertImage");
const description = document.getElementById("description");
const readMoreBtn = document.querySelector(".read-more-btn");

// 1. Create and append the close button dynamically
const closeButton = document.createElement("button");
closeButton.innerHTML = "<span>×</span> Hide Recipe";
closeButton.className = "close-recipe-btn"; 
description.appendChild(closeButton);

// 2. Optimized Toggle Function
function toggleRecipe() {
    const isVisible = description.classList.contains("show");

    if (isVisible) {
        description.classList.remove("show");
        dessertImage.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
        description.classList.add("show");
        // Delay scroll slightly to allow the element to render
        setTimeout(() => {
            description.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 100);
    }
}

// 3. Event Listeners
readMoreBtn.addEventListener("click", toggleRecipe);
dessertImage.addEventListener("click", toggleRecipe);

closeButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents the image click from re-firing
    description.classList.remove("show");
    dessertImage.scrollIntoView({ behavior: "smooth", block: "center" });
});