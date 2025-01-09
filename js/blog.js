const dessertImage = document.getElementById("dessertImage");
const description = document.getElementById("description");
dessertImage.addEventListener("click", () =>
{
    if (description.style.display === "block") {
        description.scrollIntoView({ behavior: "smooth" });
        return;
    }
    description.style.display = "block";
    description.style.opacity = 0;
    description.style.transition = "opacity 0.5s ease";
    setTimeout(() =>
    {
        description.style.opacity = 1; // Fade in
    }, 10);
    description.scrollIntoView({ behavior: "smooth" });
});
const closeButton = document.createElement("button");
closeButton.textContent = "Hide Description";
closeButton.style.marginTop = "10px";
closeButton.style.padding = "8px 12px";
closeButton.style.cursor = "pointer";
closeButton.style.border = "1px solid #ccc";
closeButton.style.backgroundColor = "#f5f5f5";
closeButton.style.borderRadius = "4px";
description.appendChild(closeButton);

closeButton.addEventListener("click", () =>
{
    description.style.opacity = 0; // Fade out
    setTimeout(() =>
    {
        description.style.display = "none";
    }, 500);
});
