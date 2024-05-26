(function () {
  window.onload = function () {
    forProductNavigationClickHandler();
  };
})();

const selectors = {
  productNavigation: ".product-info-details",
  productText: ".product-info-text",
};

function forProductNavigationClickHandler() {
  const productNavigation = document.querySelector(selectors.productNavigation);
  const productText = document.querySelector(selectors.productText);
  const productTextItem = productText.querySelectorAll("li");

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
