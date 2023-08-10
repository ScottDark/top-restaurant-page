"use strict";
(self["webpackChunktop_restaurant_page"] = self["webpackChunktop_restaurant_page"] || []).push([["src_components_page-menu_js"],{

/***/ "./src/components/page-menu.js":
/*!*************************************!*\
  !*** ./src/components/page-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageMenu)
/* harmony export */ });
/* harmony import */ var _modules_create_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/create-img */ "./src/modules/create-img.js");
/* harmony import */ var _assets_imgs_menu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/menu.jpg */ "./src/assets/imgs/menu.jpg");
/* harmony import */ var _modules_create_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/create-title */ "./src/modules/create-title.js");
/* harmony import */ var _modules_create_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/create-paragraph */ "./src/modules/create-paragraph.js");
// Create images.



// Create <h1> titles.


// Create <p> descriptions.


function pageMenu() {
  const selectContentWrapper = document.querySelector("#content");
  const imgAlt = "Krusty Krab Menu";
  const imgClass = "restaurant-img";

  const newImage = (0,_modules_create_img__WEBPACK_IMPORTED_MODULE_0__["default"])(_assets_imgs_menu_jpg__WEBPACK_IMPORTED_MODULE_1__, imgAlt, imgClass);
  selectContentWrapper.appendChild(newImage);

  const newTitle = (0,_modules_create_title__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "I was the head chef on the SS Diarrhea - Mr. Krabs"
  );
  selectContentWrapper.appendChild(newTitle);

  const newRestaurantDescription =
    "A Krabby Patty is a veggie burger sold by the fictional restaurant the Krusty Krab in the animated television series SpongeBob SquarePants. The series' creator, Stephen Hillenburg, expressly stated that the patties do not contain any meat.";

  const newPara = (0,_modules_create_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"])(newRestaurantDescription);
  selectContentWrapper.appendChild(newPara);
}


/***/ }),

/***/ "./src/assets/imgs/menu.jpg":
/*!**********************************!*\
  !*** ./src/assets/imgs/menu.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30341f4a5b3dd0761f3a.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfcGFnZS1tZW51X2pzLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM4QztBQUNBOztBQUU5QztBQUNrRDs7QUFFbEQ7QUFDMEQ7O0FBRTNDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiwrREFBUyxDQUFDLGtEQUFPO0FBQ3BDOztBQUVBLG1CQUFtQixpRUFBVztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IscUVBQWU7QUFDakM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9wYWdlLW1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlIGltYWdlcy5cbmltcG9ydCBjcmVhdGVJbWcgZnJvbSBcIi4uL21vZHVsZXMvY3JlYXRlLWltZ1wiO1xuaW1wb3J0IHJlc3RJbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL21lbnUuanBnXCI7XG5cbi8vIENyZWF0ZSA8aDE+IHRpdGxlcy5cbmltcG9ydCBjcmVhdGVUaXRsZSBmcm9tIFwiLi4vbW9kdWxlcy9jcmVhdGUtdGl0bGVcIjtcblxuLy8gQ3JlYXRlIDxwPiBkZXNjcmlwdGlvbnMuXG5pbXBvcnQgY3JlYXRlUGFyYWdyYXBoIGZyb20gXCIuLi9tb2R1bGVzL2NyZWF0ZS1wYXJhZ3JhcGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZU1lbnUoKSB7XG4gIGNvbnN0IHNlbGVjdENvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBpbWdBbHQgPSBcIktydXN0eSBLcmFiIE1lbnVcIjtcbiAgY29uc3QgaW1nQ2xhc3MgPSBcInJlc3RhdXJhbnQtaW1nXCI7XG5cbiAgY29uc3QgbmV3SW1hZ2UgPSBjcmVhdGVJbWcocmVzdEltZywgaW1nQWx0LCBpbWdDbGFzcyk7XG4gIHNlbGVjdENvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld0ltYWdlKTtcblxuICBjb25zdCBuZXdUaXRsZSA9IGNyZWF0ZVRpdGxlKFxuICAgIFwiSSB3YXMgdGhlIGhlYWQgY2hlZiBvbiB0aGUgU1MgRGlhcnJoZWEgLSBNci4gS3JhYnNcIlxuICApO1xuICBzZWxlY3RDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG5cbiAgY29uc3QgbmV3UmVzdGF1cmFudERlc2NyaXB0aW9uID1cbiAgICBcIkEgS3JhYmJ5IFBhdHR5IGlzIGEgdmVnZ2llIGJ1cmdlciBzb2xkIGJ5IHRoZSBmaWN0aW9uYWwgcmVzdGF1cmFudCB0aGUgS3J1c3R5IEtyYWIgaW4gdGhlIGFuaW1hdGVkIHRlbGV2aXNpb24gc2VyaWVzIFNwb25nZUJvYiBTcXVhcmVQYW50cy4gVGhlIHNlcmllcycgY3JlYXRvciwgU3RlcGhlbiBIaWxsZW5idXJnLCBleHByZXNzbHkgc3RhdGVkIHRoYXQgdGhlIHBhdHRpZXMgZG8gbm90IGNvbnRhaW4gYW55IG1lYXQuXCI7XG5cbiAgY29uc3QgbmV3UGFyYSA9IGNyZWF0ZVBhcmFncmFwaChuZXdSZXN0YXVyYW50RGVzY3JpcHRpb24pO1xuICBzZWxlY3RDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChuZXdQYXJhKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==