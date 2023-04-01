/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createItem(item) {
  const container = document.createElement('div');
  container.classList.add(`${item.iconClass.split(' ')[1]}-container`);

  const icon = document.createElement('i');
  icon.classList.add(...item.iconClass.split(' '));

  const text = document.createElement('p');
  text.textContent = item.text;

  container.appendChild(icon);
  container.appendChild(text);

  return container;
}

function createContact() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const location = createItem({
    iconClass: 'fas fa-location',
    text: '1040 Gare de Train, Settat'
  });

  const schedule = createItem({
    iconClass: 'fa fa-calendar',
    text: 'Monday-Friday: 8h-23h'
  });

  const phone = createItem({
    iconClass: 'fa fa-phone',
    text: '(060) 893 XXXX'
  });

  const mapImage = document.createElement('img');
  mapImage.classList.add('map-image');
  mapImage.src = 'images/location.jpg';
  mapImage.alt = 'map-image';

  contactContainer.appendChild(location);
  contactContainer.appendChild(schedule);
  contactContainer.appendChild(phone);
  contactContainer.appendChild(mapImage);

  return contactContainer;
}

function createContactWrapper() {
  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('hide-contact');
  contactWrapper.appendChild(createContact());
  return contactWrapper;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactWrapper);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome () {
  const homeContainer = document.createElement('main');
  homeContainer.classList.add('home-container');

  const homeHeading = document.createElement('h3');
  homeHeading.classList.add('home-heading');
  homeHeading.textContent = 'Come enjoy some delicious marocain cuisines';

  const homeParagraph = document.createElement('p');
  homeParagraph.classList.add('home-paragraph');
  homeParagraph.textContent = 'Check out our menu below!';

  const homeImage = document.createElement('img');
  homeImage.classList.add('home-img');
  homeImage.src = 'images/menu-pic.jpg';
  homeImage.alt = 'home-img';

  const homeButton = document.createElement('button');
  homeButton.classList.add('home-button');
  homeButton.textContent = 'order now';

  homeContainer.appendChild(homeHeading);
  homeContainer.appendChild(homeParagraph);
  homeContainer.appendChild(homeImage);
  homeContainer.appendChild(homeButton);

  return homeContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const menuItems = [
    {
      imageSrc: 'images/menus/bread.jpg',
      imageAlt: 'toasted grapy bread',
      title: 'Toasted Grapy Bread',
      price: '$15.99',
      text: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth.',
    },
    {
      imageSrc: 'images/menus/pancakes.jpg',
      imageAlt: 'strawberry pancakes',
      title: 'Strawberry Pancakes',
      price: '$5.99',
      text: 'Sustainable ethical small batch everyday carry semiotics swag blue bottle fingerstache.',
    },
    {
      imageSrc: 'images/menus/dinner1.jpg',
      imageAlt: 'vegetable rice',
      title: 'Vegetable Rice',
      price: '$11.99',
      text: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    },
    {
      imageSrc: 'images/menus/salmon.jpg',
      imageAlt: 'salmon crispy',
      title: 'Salmon Crispy',
      price: '$10.99',
      text: 'Sustainable ethical small batch everyday carry semiotics swag blue bottle fingerstache.',
    },
    {
      imageSrc: 'images/menus/burger.jpg',
      imageAlt: 'dinner double',
      title: 'Dinner Double',
      price: '$7.99',
      text: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    },
    {
      imageSrc: 'images/menus/steak.jpg',
      imageAlt: 'steak dinner',
      title: 'Tomato Steak',
      price: '$19.99',
      text: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    },
    {
      imageSrc: 'images/menus/delight.jpg',
      imageAlt: 'country delight',
      title: 'Country Delight',
      price: '$12.99',
      text: 'Sustainable ethical small batch everyday carry semiotics swag blue bottle fingerstache.',
    },
    {
      imageSrc: 'images/menus/supper2.jpg',
      imageAlt: 'classic pizza',
      title: 'Classic Pizza',
      price: '$15.99',
      text: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    },
  ];

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuImage = document.createElement('img');
    menuImage.classList.add('menu-image');
    menuImage.src = menuItems[i].imageSrc;
    menuImage.alt = menuItems[i].imageAlt;

    const menuInfo = document.createElement('div');
    menuInfo.classList.add('menu-info');

    const menuHeader = document.createElement('header');
    const menuTitle = document.createElement('h4');
    menuTitle.textContent = menuItems[i].title;

    const menuPrice = document.createElement('h4');
    menuPrice.classList.add('menu-price');
    menuPrice.textContent = menuItems[i].price;

    const menuText = document.createElement('p');
    menuText.classList.add('menu-text');
    menuText.textContent = menuItems[i].text;

    menuHeader.appendChild(menuTitle);
    menuHeader.appendChild(menuPrice);
    menuInfo.appendChild(menuHeader);
    menuInfo.appendChild(menuText);
    menuItem.appendChild(menuImage);
    menuItem.appendChild(menuInfo);
    menuContainer.appendChild(menuItem);
  }

  return menuContainer;
}

function createMenuWrapper() {
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("hide-container"); // add hide-container class
  menuWrapper.appendChild(createMenu());
  return menuWrapper;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuWrapper);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function createNavItem (text, url, id) {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');
  navLink.textContent = text;
  navLink.href = url;
  navLink.classList.add('nav-link');
  navLink.addEventListener('click', () => switchSection(id));
  navItem.appendChild(navLink);
  return navItem;
}

function createNavbar() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const navLinksWrapper = document.createElement('div');
  navLinksWrapper.classList.add('navlinks-wrapper');

  const restaurantName = document.createElement('div');
  restaurantName.textContent = 'Riola';
  restaurantName.classList.add('restaurant-name');
  navLinksWrapper.appendChild(restaurantName);

  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav-links');
  navLinks.appendChild(createNavItem('home', '#', 'home'));
  navLinks.appendChild(createNavItem('menu', '#', 'menu'));
  navLinks.appendChild(createNavItem('contact', '#', 'contact'));
  navLinksWrapper.appendChild(navLinks);
  nav.appendChild(navLinksWrapper);

  return nav;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const currentYear = new Date().getFullYear();
  const name = 'Bismark Agyare';
  const githubUrl = 'https://github.com/bismarkagyare';

  const footerContent = document.createElement('div');
  footerContent.innerHTML = `&copy; ${currentYear} ${name}
  <a href="${githubUrl}" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-github"></i>
  </a>`
  footer.appendChild(footerContent);
  return footer;
}

function switchSection(id) {
  const homeSection = document.getElementById('home');
  const menuSection = document.getElementById('menu');
  const contactSection = document.getElementById('contact');

  if (id === 'home') {
    homeSection.style.display = 'block';
    menuSection.style.display = 'none';
    contactSection.style.display = 'none';
  } else if (id === 'menu') {
    homeSection.style.display = 'none';
    menuSection.style.display = 'block';
    contactSection.style.display = 'none';
  } else {
    homeSection.style.display = 'none';
    menuSection.style.display = 'none';
    contactSection.style.display = 'block';
  }
}


function initWebsite() {
  const navbar = createNavbar();
  const homeSection = (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  homeSection.setAttribute('id', 'home'); // add ID to home section
  const menuSection = (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  menuSection.setAttribute('id', 'menu'); // add ID to menu section
  const contactSection = (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  contactSection.setAttribute('id', 'contact');
  const footerSection = createFooter();

  const content = document.getElementById('content');
  content.appendChild(navbar);
  content.appendChild(homeSection);
  content.appendChild(menuSection);
  content.appendChild(contactSection);
  content.appendChild(footerSection);
}

initWebsite();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVJdGVtKGl0ZW0pIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke2l0ZW0uaWNvbkNsYXNzLnNwbGl0KCcgJylbMV19LWNvbnRhaW5lcmApO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGljb24uY2xhc3NMaXN0LmFkZCguLi5pdGVtLmljb25DbGFzcy5zcGxpdCgnICcpKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlSXRlbSh7XG4gICAgaWNvbkNsYXNzOiAnZmFzIGZhLWxvY2F0aW9uJyxcbiAgICB0ZXh0OiAnMTA0MCBHYXJlIGRlIFRyYWluLCBTZXR0YXQnXG4gIH0pO1xuXG4gIGNvbnN0IHNjaGVkdWxlID0gY3JlYXRlSXRlbSh7XG4gICAgaWNvbkNsYXNzOiAnZmEgZmEtY2FsZW5kYXInLFxuICAgIHRleHQ6ICdNb25kYXktRnJpZGF5OiA4aC0yM2gnXG4gIH0pO1xuXG4gIGNvbnN0IHBob25lID0gY3JlYXRlSXRlbSh7XG4gICAgaWNvbkNsYXNzOiAnZmEgZmEtcGhvbmUnLFxuICAgIHRleHQ6ICcoMDYwKSA4OTMgWFhYWCdcbiAgfSk7XG5cbiAgY29uc3QgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbWFwSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWFwLWltYWdlJyk7XG4gIG1hcEltYWdlLnNyYyA9ICdpbWFnZXMvbG9jYXRpb24uanBnJztcbiAgbWFwSW1hZ2UuYWx0ID0gJ21hcC1pbWFnZSc7XG5cbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChtYXBJbWFnZSk7XG5cbiAgcmV0dXJuIGNvbnRhY3RDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RXcmFwcGVyKCkge1xuICBjb25zdCBjb250YWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRlLWNvbnRhY3QnKTtcbiAgY29udGFjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbiAgcmV0dXJuIGNvbnRhY3RXcmFwcGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0V3JhcHBlcjsiLCJmdW5jdGlvbiBjcmVhdGVIb21lICgpIHtcbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGhvbWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaG9tZUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaG9tZS1oZWFkaW5nJyk7XG4gIGhvbWVIZWFkaW5nLnRleHRDb250ZW50ID0gJ0NvbWUgZW5qb3kgc29tZSBkZWxpY2lvdXMgbWFyb2NhaW4gY3Vpc2luZXMnO1xuXG4gIGNvbnN0IGhvbWVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvbWVQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnaG9tZS1wYXJhZ3JhcGgnKTtcbiAgaG9tZVBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdDaGVjayBvdXQgb3VyIG1lbnUgYmVsb3chJztcblxuICBjb25zdCBob21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaG9tZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWUtaW1nJyk7XG4gIGhvbWVJbWFnZS5zcmMgPSAnaW1hZ2VzL21lbnUtcGljLmpwZyc7XG4gIGhvbWVJbWFnZS5hbHQgPSAnaG9tZS1pbWcnO1xuXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lLWJ1dHRvbicpO1xuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ29yZGVyIG5vdyc7XG5cbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lSGVhZGluZyk7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVBhcmFncmFwaCk7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUltYWdlKTtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcblxuICByZXR1cm4gaG9tZUNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcblxuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdpbWFnZXMvbWVudXMvYnJlYWQuanBnJyxcbiAgICAgIGltYWdlQWx0OiAndG9hc3RlZCBncmFweSBicmVhZCcsXG4gICAgICB0aXRsZTogJ1RvYXN0ZWQgR3JhcHkgQnJlYWQnLFxuICAgICAgcHJpY2U6ICckMTUuOTknLFxuICAgICAgdGV4dDogJ09tYnVjaGEgY2hpbGx3YXZlIGZhbm55IHBhY2sgMyB3b2xmIG1vb24gc3RyZWV0IGFydCBwaG90byBib290aC4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdpbWFnZXMvbWVudXMvcGFuY2FrZXMuanBnJyxcbiAgICAgIGltYWdlQWx0OiAnc3RyYXdiZXJyeSBwYW5jYWtlcycsXG4gICAgICB0aXRsZTogJ1N0cmF3YmVycnkgUGFuY2FrZXMnLFxuICAgICAgcHJpY2U6ICckNS45OScsXG4gICAgICB0ZXh0OiAnU3VzdGFpbmFibGUgZXRoaWNhbCBzbWFsbCBiYXRjaCBldmVyeWRheSBjYXJyeSBzZW1pb3RpY3Mgc3dhZyBibHVlIGJvdHRsZSBmaW5nZXJzdGFjaGUuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlU3JjOiAnaW1hZ2VzL21lbnVzL2Rpbm5lcjEuanBnJyxcbiAgICAgIGltYWdlQWx0OiAndmVnZXRhYmxlIHJpY2UnLFxuICAgICAgdGl0bGU6ICdWZWdldGFibGUgUmljZScsXG4gICAgICBwcmljZTogJyQxMS45OScsXG4gICAgICB0ZXh0OiAnT21idWNoYSBjaGlsbHdhdmUgZmFubnkgcGFjayAzIHdvbGYgbW9vbiBzdHJlZXQgYXJ0IHBob3RvIGJvb3RoIGJlZm9yZSB0aGV5IHNvbGQgb3V0IG9yZ2FuaWMgdmlyYWwuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlU3JjOiAnaW1hZ2VzL21lbnVzL3NhbG1vbi5qcGcnLFxuICAgICAgaW1hZ2VBbHQ6ICdzYWxtb24gY3Jpc3B5JyxcbiAgICAgIHRpdGxlOiAnU2FsbW9uIENyaXNweScsXG4gICAgICBwcmljZTogJyQxMC45OScsXG4gICAgICB0ZXh0OiAnU3VzdGFpbmFibGUgZXRoaWNhbCBzbWFsbCBiYXRjaCBldmVyeWRheSBjYXJyeSBzZW1pb3RpY3Mgc3dhZyBibHVlIGJvdHRsZSBmaW5nZXJzdGFjaGUuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlU3JjOiAnaW1hZ2VzL21lbnVzL2J1cmdlci5qcGcnLFxuICAgICAgaW1hZ2VBbHQ6ICdkaW5uZXIgZG91YmxlJyxcbiAgICAgIHRpdGxlOiAnRGlubmVyIERvdWJsZScsXG4gICAgICBwcmljZTogJyQ3Ljk5JyxcbiAgICAgIHRleHQ6ICdPbWJ1Y2hhIGNoaWxsd2F2ZSBmYW5ueSBwYWNrIDMgd29sZiBtb29uIHN0cmVldCBhcnQgcGhvdG8gYm9vdGggYmVmb3JlIHRoZXkgc29sZCBvdXQgb3JnYW5pYyB2aXJhbC4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdpbWFnZXMvbWVudXMvc3RlYWsuanBnJyxcbiAgICAgIGltYWdlQWx0OiAnc3RlYWsgZGlubmVyJyxcbiAgICAgIHRpdGxlOiAnVG9tYXRvIFN0ZWFrJyxcbiAgICAgIHByaWNlOiAnJDE5Ljk5JyxcbiAgICAgIHRleHQ6ICdPbWJ1Y2hhIGNoaWxsd2F2ZSBmYW5ueSBwYWNrIDMgd29sZiBtb29uIHN0cmVldCBhcnQgcGhvdG8gYm9vdGggYmVmb3JlIHRoZXkgc29sZCBvdXQgb3JnYW5pYyB2aXJhbC4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdpbWFnZXMvbWVudXMvZGVsaWdodC5qcGcnLFxuICAgICAgaW1hZ2VBbHQ6ICdjb3VudHJ5IGRlbGlnaHQnLFxuICAgICAgdGl0bGU6ICdDb3VudHJ5IERlbGlnaHQnLFxuICAgICAgcHJpY2U6ICckMTIuOTknLFxuICAgICAgdGV4dDogJ1N1c3RhaW5hYmxlIGV0aGljYWwgc21hbGwgYmF0Y2ggZXZlcnlkYXkgY2Fycnkgc2VtaW90aWNzIHN3YWcgYmx1ZSBib3R0bGUgZmluZ2Vyc3RhY2hlLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2ltYWdlcy9tZW51cy9zdXBwZXIyLmpwZycsXG4gICAgICBpbWFnZUFsdDogJ2NsYXNzaWMgcGl6emEnLFxuICAgICAgdGl0bGU6ICdDbGFzc2ljIFBpenphJyxcbiAgICAgIHByaWNlOiAnJDE1Ljk5JyxcbiAgICAgIHRleHQ6ICdPbWJ1Y2hhIGNoaWxsd2F2ZSBmYW5ueSBwYWNrIDMgd29sZiBtb29uIHN0cmVldCBhcnQgcGhvdG8gYm9vdGggYmVmb3JlIHRoZXkgc29sZCBvdXQgb3JnYW5pYyB2aXJhbC4nLFxuICAgIH0sXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgY29uc3QgbWVudUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudUltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcbiAgICBtZW51SW1hZ2Uuc3JjID0gbWVudUl0ZW1zW2ldLmltYWdlU3JjO1xuICAgIG1lbnVJbWFnZS5hbHQgPSBtZW51SXRlbXNbaV0uaW1hZ2VBbHQ7XG5cbiAgICBjb25zdCBtZW51SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJbmZvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW5mbycpO1xuXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldLnRpdGxlO1xuXG4gICAgY29uc3QgbWVudVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBtZW51UHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudS1wcmljZScpO1xuICAgIG1lbnVQcmljZS50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXS5wcmljZTtcblxuICAgIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVUZXh0LmNsYXNzTGlzdC5hZGQoJ21lbnUtdGV4dCcpO1xuICAgIG1lbnVUZXh0LnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldLnRleHQ7XG5cbiAgICBtZW51SGVhZGVyLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gICAgbWVudUhlYWRlci5hcHBlbmRDaGlsZChtZW51UHJpY2UpO1xuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKG1lbnVUZXh0KTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SW1hZ2UpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJbmZvKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfVxuXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51V3JhcHBlcigpIHtcbiAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaGlkZS1jb250YWluZXJcIik7IC8vIGFkZCBoaWRlLWNvbnRhaW5lciBjbGFzc1xuICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICByZXR1cm4gbWVudVdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVXcmFwcGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlTWVudVdyYXBwZXIgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RXcmFwcGVyIGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2SXRlbSAodGV4dCwgdXJsLCBpZCkge1xuICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbmF2TGluay50ZXh0Q29udGVudCA9IHRleHQ7XG4gIG5hdkxpbmsuaHJlZiA9IHVybDtcbiAgbmF2TGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpO1xuICBuYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3dpdGNoU2VjdGlvbihpZCkpO1xuICBuYXZJdGVtLmFwcGVuZENoaWxkKG5hdkxpbmspO1xuICByZXR1cm4gbmF2SXRlbTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2YmFyKCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gIGNvbnN0IG5hdkxpbmtzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZMaW5rc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmF2bGlua3Mtd3JhcHBlcicpO1xuXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ1Jpb2xhJztcbiAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1uYW1lJyk7XG4gIG5hdkxpbmtzV3JhcHBlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBuYXZMaW5rcy5jbGFzc0xpc3QuYWRkKCduYXYtbGlua3MnKTtcbiAgbmF2TGlua3MuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2SXRlbSgnaG9tZScsICcjJywgJ2hvbWUnKSk7XG4gIG5hdkxpbmtzLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkl0ZW0oJ21lbnUnLCAnIycsICdtZW51JykpO1xuICBuYXZMaW5rcy5hcHBlbmRDaGlsZChjcmVhdGVOYXZJdGVtKCdjb250YWN0JywgJyMnLCAnY29udGFjdCcpKTtcbiAgbmF2TGlua3NXcmFwcGVyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcbiAgbmF2LmFwcGVuZENoaWxkKG5hdkxpbmtzV3JhcHBlcik7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBuYW1lID0gJ0Jpc21hcmsgQWd5YXJlJztcbiAgY29uc3QgZ2l0aHViVXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9iaXNtYXJrYWd5YXJlJztcblxuICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNvbnRlbnQuaW5uZXJIVE1MID0gYCZjb3B5OyAke2N1cnJlbnRZZWFyfSAke25hbWV9XG4gIDxhIGhyZWY9XCIke2dpdGh1YlVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgPGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPlxuICA8L2E+YFxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFNlY3Rpb24oaWQpIHtcbiAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcblxuICBpZiAoaWQgPT09ICdob21lJykge1xuICAgIGhvbWVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIG1lbnVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29udGFjdFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSBlbHNlIGlmIChpZCA9PT0gJ21lbnUnKSB7XG4gICAgaG9tZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtZW51U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb250YWN0U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9IGVsc2Uge1xuICAgIGhvbWVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWVudVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb250YWN0U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGluaXRXZWJzaXRlKCkge1xuICBjb25zdCBuYXZiYXIgPSBjcmVhdGVOYXZiYXIoKTtcbiAgY29uc3QgaG9tZVNlY3Rpb24gPSBjcmVhdGVIb21lKCk7XG4gIGhvbWVTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpOyAvLyBhZGQgSUQgdG8gaG9tZSBzZWN0aW9uXG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gY3JlYXRlTWVudVdyYXBwZXIoKTtcbiAgbWVudVNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7IC8vIGFkZCBJRCB0byBtZW51IHNlY3Rpb25cbiAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBjcmVhdGVDb250YWN0V3JhcHBlcigpO1xuICBjb250YWN0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcbiAgY29uc3QgZm9vdGVyU2VjdGlvbiA9IGNyZWF0ZUZvb3RlcigpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVNlY3Rpb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyU2VjdGlvbik7XG59XG5cbmluaXRXZWJzaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9