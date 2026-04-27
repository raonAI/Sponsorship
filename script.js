// 이미지 프리로드 (모바일 속도 개선)
const preloadImages = [
  "assets/product1.png",
  "assets/product2.png",
  "assets/product3.png",
  "assets/feature.png"
];

preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

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
