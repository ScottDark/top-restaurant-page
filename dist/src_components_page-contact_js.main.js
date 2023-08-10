"use strict";
(self["webpackChunktop_restaurant_page"] = self["webpackChunktop_restaurant_page"] || []).push([["src_components_page-contact_js"],{

/***/ "./src/components/page-contact.js":
/*!****************************************!*\
  !*** ./src/components/page-contact.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageContact)
/* harmony export */ });
/* harmony import */ var _modules_create_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/create-img */ "./src/modules/create-img.js");
/* harmony import */ var _assets_imgs_staff_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/staff.jpg */ "./src/assets/imgs/staff.jpg");
/* harmony import */ var _modules_create_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/create-title */ "./src/modules/create-title.js");
/* harmony import */ var _modules_create_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/create-paragraph */ "./src/modules/create-paragraph.js");
// Create images.



// Create <h1> titles.


// Create <p> descriptions.


function pageContact() {
  const selectContentWrapper = document.querySelector("#content");
  const imgAlt = "Krusty Krab Staff";
  const imgClass = "restaurant-img";

  const newImage = (0,_modules_create_img__WEBPACK_IMPORTED_MODULE_0__["default"])(_assets_imgs_staff_jpg__WEBPACK_IMPORTED_MODULE_1__, imgAlt, imgClass);
  selectContentWrapper.appendChild(newImage);

  const newTitle = (0,_modules_create_title__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "Get back to work all of you! I’m not running a happy factory here!"
  );
  selectContentWrapper.appendChild(newTitle);

  const newRestaurantDescription =
    "SpongeBob SquarePants (commonly known as simply SpongeBob) is an American animated comedy television series created by marine science educator and animator Stephen Hillenburg for Nickelodeon. Address is 124 Conch Street";

  const newPara = (0,_modules_create_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"])(newRestaurantDescription);
  selectContentWrapper.appendChild(newPara);
}


/***/ }),

/***/ "./src/assets/imgs/staff.jpg":
/*!***********************************!*\
  !*** ./src/assets/imgs/staff.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f4dbc7c24aaa5a74933.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfcGFnZS1jb250YWN0X2pzLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM4QztBQUNDOztBQUUvQztBQUNrRDs7QUFFbEQ7QUFDMEQ7O0FBRTNDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiwrREFBUyxDQUFDLG1EQUFPO0FBQ3BDOztBQUVBLG1CQUFtQixpRUFBVztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IscUVBQWU7QUFDakM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9wYWdlLWNvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlIGltYWdlcy5cbmltcG9ydCBjcmVhdGVJbWcgZnJvbSBcIi4uL21vZHVsZXMvY3JlYXRlLWltZ1wiO1xuaW1wb3J0IHJlc3RJbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL3N0YWZmLmpwZ1wiO1xuXG4vLyBDcmVhdGUgPGgxPiB0aXRsZXMuXG5pbXBvcnQgY3JlYXRlVGl0bGUgZnJvbSBcIi4uL21vZHVsZXMvY3JlYXRlLXRpdGxlXCI7XG5cbi8vIENyZWF0ZSA8cD4gZGVzY3JpcHRpb25zLlxuaW1wb3J0IGNyZWF0ZVBhcmFncmFwaCBmcm9tIFwiLi4vbW9kdWxlcy9jcmVhdGUtcGFyYWdyYXBoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VDb250YWN0KCkge1xuICBjb25zdCBzZWxlY3RDb250ZW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgaW1nQWx0ID0gXCJLcnVzdHkgS3JhYiBTdGFmZlwiO1xuICBjb25zdCBpbWdDbGFzcyA9IFwicmVzdGF1cmFudC1pbWdcIjtcblxuICBjb25zdCBuZXdJbWFnZSA9IGNyZWF0ZUltZyhyZXN0SW1nLCBpbWdBbHQsIGltZ0NsYXNzKTtcbiAgc2VsZWN0Q29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuXG4gIGNvbnN0IG5ld1RpdGxlID0gY3JlYXRlVGl0bGUoXG4gICAgXCJHZXQgYmFjayB0byB3b3JrIGFsbCBvZiB5b3UhIEnigJltIG5vdCBydW5uaW5nIGEgaGFwcHkgZmFjdG9yeSBoZXJlIVwiXG4gICk7XG4gIHNlbGVjdENvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcblxuICBjb25zdCBuZXdSZXN0YXVyYW50RGVzY3JpcHRpb24gPVxuICAgIFwiU3BvbmdlQm9iIFNxdWFyZVBhbnRzIChjb21tb25seSBrbm93biBhcyBzaW1wbHkgU3BvbmdlQm9iKSBpcyBhbiBBbWVyaWNhbiBhbmltYXRlZCBjb21lZHkgdGVsZXZpc2lvbiBzZXJpZXMgY3JlYXRlZCBieSBtYXJpbmUgc2NpZW5jZSBlZHVjYXRvciBhbmQgYW5pbWF0b3IgU3RlcGhlbiBIaWxsZW5idXJnIGZvciBOaWNrZWxvZGVvbi4gQWRkcmVzcyBpcyAxMjQgQ29uY2ggU3RyZWV0XCI7XG5cbiAgY29uc3QgbmV3UGFyYSA9IGNyZWF0ZVBhcmFncmFwaChuZXdSZXN0YXVyYW50RGVzY3JpcHRpb24pO1xuICBzZWxlY3RDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChuZXdQYXJhKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==