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
  const productTextItem = productText.querySelectorAll("li");

  // Get all list items in product navigation
  const navigationItem = productNavigation.querySelectorAll("li");
  navigationItem.forEach((navItem) => {
    navItem.addEventListener("click", (e) => {
      const currentNavItem = e.currentTarget;
      navigationItem.forEach((item) => item.classList.remove("active"));
      currentNavItem.classList.add("active");
      productTextItem.forEach((textItem) =>
        textItem.classList.remove("active")
      );
      productText
        .querySelector("li[data-id='" + currentNavItem.id + "']")
        .classList.add("active");
    });
  });
}
