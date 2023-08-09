import("../scss/styles.scss");
import pageHome from "../components/page-home.js";
import pageMenu from "../components/page-menu.js";
import pageContact from "../components/page-contact.js";

/* Add event listeners to tab switching */
function addEventListenersToTab() {
  const navTabs = document.querySelectorAll(".nav-link");

  navTabs.forEach((tab) => {
    tab.addEventListener("click", tabSwitching);
  });
}

/* Dynamic tabs to switch between pages. */
function tabSwitching() {
  const selectContentWrapper = document.querySelector("#content");
  console.log("I was clicked");
}

pageHome();
addEventListenersToTab();

// pageMenu();
// pageContact();
