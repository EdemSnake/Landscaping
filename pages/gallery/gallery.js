document.addEventListener("DOMContentLoaded", () => {
    const imageContainers = document.querySelectorAll(".image-container");
  
    imageContainers.forEach((container) => {
      const overlay = container.querySelector(".overlay");
      const overlayText = container.querySelector(".overlay-text");
  
      container.addEventListener("mouseover", () => {
        overlay.style.bottom = "0";
        overlayText.style.transform = "translateY(0)";
      });
  
      container.addEventListener("mouseout", () => {
        overlay.style.bottom = "-100%";
        overlayText.style.transform = "translateY(20px)";
      });
    });
  });
  