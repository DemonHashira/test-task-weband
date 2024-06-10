// Immediately Invoked Function Expression (IIFE) to avoid polluting the global namespace
(function () {
  window.onload = function () {
    scrollToInfo();
    forProductNavigationClickHandler();
  };
})();

// Object to store CSS selectors for easier reference
const selectors = {
  scrollToInfo: ".js-scroll-info",
  productInfoContainer: ".for-product",
  productNavigation: ".product-info-details",
  productText: ".product-info-text",
};

// Function to handle scrolling to product info
function scrollToInfo() {
  const scrollToInfo = document.querySelector(selectors.scrollToInfo);
  scrollToInfo.addEventListener("click", () => {
    const info = document.querySelector(selectors.productInfoContainer);
    info.scrollIntoView({ behavior: "smooth" });
  });
}

// Function to handle click events on product navigation
function forProductNavigationClickHandler() {
  const productNavigation = document.querySelector(selectors.productNavigation);
  const productText = document.querySelector(selectors.productText);

  // Convert to arrays
  const productTextItems = Array.from(productText.querySelectorAll("li"));
  const navigationItems = Array.from(productNavigation.querySelectorAll("li"));

  navigationItems.forEach((navItem) => {
    navItem.addEventListener("click", (e) => {
      const currentNavItem = e.currentTarget;

      // Remove "active" class from all items
      navigationItems.forEach((item) => item.classList.remove("active"));
      productTextItems.forEach((textItem) =>
        textItem.classList.remove("active")
      );

      // Add "active" class to clicked item
      currentNavItem.classList.add("active");

      // Find index of clicked item
      const index = navigationItems.indexOf(currentNavItem);

      // Add "active" class to corresponding product text item
      productTextItems[index].classList.add("active");
    });
  });
}
