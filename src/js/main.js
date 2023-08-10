import("../scss/styles.scss");
import pageHome from "../components/page-home.js";

/* Add event listeners to tab switching */
function tabSwitchingEventListeners() {
  const navTabs = document.querySelectorAll(".nav-link");

  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabSwitching(tab);
    });
  });
}

/* Dynamic tabs to switch between pages. */
async function tabSwitching(tab) {
  const selectContentWrapper = document.querySelector("#content");
  const tabText = tab.innerText;

  switch (tabText) {
    case "Home":
      unloadPage(tab);
      pageHome();

      break;

    case "Menu":
      unloadPage(tab);

      let objM = await import("../components/page-menu.js");
      let pageMenu = objM.default;

      pageMenu();

      break;

    case "Contact":
      unloadPage(tab);

      let objC = await import("../components/page-contact.js");
      let pageContact = objC.default;

      pageContact();

      break;

    default:
      console.log("Error switching tabs.");
      break;
  }
}

/* unload Page by removing all children of #content*/
function unloadPage(tab) {
  const selectContentWrapper = document.querySelector("#content");
  const navTabs = document.querySelectorAll(".nav-link");

  // Remove all tab highlight "active" class.
  navTabs.forEach((element) => {
    element.classList.remove("active");
  });

  // Set current tab as active.
  tab.classList.add("active");

  while (selectContentWrapper.firstChild) {
    selectContentWrapper.removeChild(selectContentWrapper.firstChild);
  }
}

// Initial load to home page.
pageHome();
tabSwitchingEventListeners();
