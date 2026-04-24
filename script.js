const tabs = document.querySelectorAll(".product-tab");
const selectedImage = document.getElementById("selected-product-image");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const imagePath = tab.dataset.image;

    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    selectedImage.style.opacity = "0";

    setTimeout(() => {
      selectedImage.src = imagePath;
      selectedImage.alt = tab.textContent.trim();
      selectedImage.style.opacity = "1";
    }, 120);
  });
});
