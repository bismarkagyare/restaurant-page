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
  homeImage.src = 'images/menu-profile.jpg';
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
      imageSrc: 'images/menus/dinner1.jpg',
      imageAlt: 'toasted grapy bread',
      title: 'Toasted Grapy Bread',
      price: '$15.99',
      text: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth.',
    },
    {
      imageSrc: 'images/menus/supper2.jpg',
      imageAlt: 'strawberry pancakes',
      title: 'Strawberry Pancakes',
      price: '$5.99',
      text: 'Sustainable ethical small batch everyday carry semiotics swag blue bottle fingerstache.',
    },
    {
      imageSrc: 'images/menus/supper2.jpg',
      imageAlt: 'vegetable rice',
      title: 'Vegetable Rice',
      price: '$11.99',
      text: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    },
    {
      imageSrc: 'images/menus/dinner1.jpg',
      imageAlt: 'salmon crispy',
      title: 'Salmon Crispy',
      price: '$10.99',
      text: 'Sustainable ethical small batch everyday carry semiotics swag blue bottle fingerstache.',
    },
    {
      imageSrc: 'images/menus/dinner1.jpg',
      imageAlt: 'dinner double',
      title: 'Dinner Double',
      price: '$7.99',
      text: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    },
    {
      imageSrc: 'images/menus/supper2.jpg',
      imageAlt: 'tomato steak',
      title: 'Tomato Steak',
      price: '$19.99',
      text: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    },
    {
      imageSrc: 'images/menus/supper2.jpg',
      imageAlt: 'country delight',
      title: 'Country Delight',
      price: '$12.99',
      text: 'Sustainable ethical small batch everyday carry semiotics swag blue bottle fingerstache.',
    },
    {
      imageSrc: 'images/menus/dinner1.jpg',
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

  const restaurantName = document.createElement('div');
  restaurantName.textContent = 'Riola';
  restaurantName.classList.add('restaurant-name');
  nav.appendChild(restaurantName);

  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav-links');
  navLinks.appendChild(createNavItem('home', '#', 'home'));
  navLinks.appendChild(createNavItem('menu', '#', 'menu'));
  navLinks.appendChild(createNavItem('contact', '#', 'contact'));
  nav.appendChild(navLinks);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUl0ZW0oaXRlbSkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7aXRlbS5pY29uQ2xhc3Muc3BsaXQoJyAnKVsxXX0tY29udGFpbmVyYCk7XG5cbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKC4uLml0ZW0uaWNvbkNsYXNzLnNwbGl0KCcgJykpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbG9jYXRpb24gPSBjcmVhdGVJdGVtKHtcbiAgICBpY29uQ2xhc3M6ICdmYXMgZmEtbG9jYXRpb24nLFxuICAgIHRleHQ6ICcxMDQwIEdhcmUgZGUgVHJhaW4sIFNldHRhdCdcbiAgfSk7XG5cbiAgY29uc3Qgc2NoZWR1bGUgPSBjcmVhdGVJdGVtKHtcbiAgICBpY29uQ2xhc3M6ICdmYSBmYS1jYWxlbmRhcicsXG4gICAgdGV4dDogJ01vbmRheS1GcmlkYXk6IDhoLTIzaCdcbiAgfSk7XG5cbiAgY29uc3QgcGhvbmUgPSBjcmVhdGVJdGVtKHtcbiAgICBpY29uQ2xhc3M6ICdmYSBmYS1waG9uZScsXG4gICAgdGV4dDogJygwNjApIDg5MyBYWFhYJ1xuICB9KTtcblxuICBjb25zdCBtYXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtYXBJbWFnZS5jbGFzc0xpc3QuYWRkKCdtYXAtaW1hZ2UnKTtcbiAgbWFwSW1hZ2Uuc3JjID0gJ2ltYWdlcy9sb2NhdGlvbi5qcGcnO1xuICBtYXBJbWFnZS5hbHQgPSAnbWFwLWltYWdlJztcblxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1hcEltYWdlKTtcblxuICByZXR1cm4gY29udGFjdENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFdyYXBwZXIoKSB7XG4gIGNvbnN0IGNvbnRhY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUtY29udGFjdCcpO1xuICBjb250YWN0V3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xuICByZXR1cm4gY29udGFjdFdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RXcmFwcGVyOyIsImZ1bmN0aW9uIGNyZWF0ZUhvbWUgKCkge1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaG9tZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBob21lSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdob21lLWhlYWRpbmcnKTtcbiAgaG9tZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29tZSBlbmpveSBzb21lIGRlbGljaW91cyBtYXJvY2FpbiBjdWlzaW5lcyc7XG5cbiAgY29uc3QgaG9tZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaG9tZVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdob21lLXBhcmFncmFwaCcpO1xuICBob21lUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0NoZWNrIG91dCBvdXIgbWVudSBiZWxvdyEnO1xuXG4gIGNvbnN0IGhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBob21lSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaG9tZS1pbWcnKTtcbiAgaG9tZUltYWdlLnNyYyA9ICdpbWFnZXMvbWVudS1wcm9maWxlLmpwZyc7XG4gIGhvbWVJbWFnZS5hbHQgPSAnaG9tZS1pbWcnO1xuXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lLWJ1dHRvbicpO1xuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ29yZGVyIG5vdyc7XG5cbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lSGVhZGluZyk7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVBhcmFncmFwaCk7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUltYWdlKTtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcblxuICByZXR1cm4gaG9tZUNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcblxuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdpbWFnZXMvbWVudXMvZGlubmVyMS5qcGcnLFxuICAgICAgaW1hZ2VBbHQ6ICd0b2FzdGVkIGdyYXB5IGJyZWFkJyxcbiAgICAgIHRpdGxlOiAnVG9hc3RlZCBHcmFweSBCcmVhZCcsXG4gICAgICBwcmljZTogJyQxNS45OScsXG4gICAgICB0ZXh0OiAnT21idWNoYSBjaGlsbHdhdmUgZmFubnkgcGFjayAzIHdvbGYgbW9vbiBzdHJlZXQgYXJ0IHBob3RvIGJvb3RoLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2ltYWdlcy9tZW51cy9zdXBwZXIyLmpwZycsXG4gICAgICBpbWFnZUFsdDogJ3N0cmF3YmVycnkgcGFuY2FrZXMnLFxuICAgICAgdGl0bGU6ICdTdHJhd2JlcnJ5IFBhbmNha2VzJyxcbiAgICAgIHByaWNlOiAnJDUuOTknLFxuICAgICAgdGV4dDogJ1N1c3RhaW5hYmxlIGV0aGljYWwgc21hbGwgYmF0Y2ggZXZlcnlkYXkgY2Fycnkgc2VtaW90aWNzIHN3YWcgYmx1ZSBib3R0bGUgZmluZ2Vyc3RhY2hlLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2ltYWdlcy9tZW51cy9zdXBwZXIyLmpwZycsXG4gICAgICBpbWFnZUFsdDogJ3ZlZ2V0YWJsZSByaWNlJyxcbiAgICAgIHRpdGxlOiAnVmVnZXRhYmxlIFJpY2UnLFxuICAgICAgcHJpY2U6ICckMTEuOTknLFxuICAgICAgdGV4dDogJ09tYnVjaGEgY2hpbGx3YXZlIGZhbm55IHBhY2sgMyB3b2xmIG1vb24gc3RyZWV0IGFydCBwaG90byBib290aCBiZWZvcmUgdGhleSBzb2xkIG91dCBvcmdhbmljIHZpcmFsLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2ltYWdlcy9tZW51cy9kaW5uZXIxLmpwZycsXG4gICAgICBpbWFnZUFsdDogJ3NhbG1vbiBjcmlzcHknLFxuICAgICAgdGl0bGU6ICdTYWxtb24gQ3Jpc3B5JyxcbiAgICAgIHByaWNlOiAnJDEwLjk5JyxcbiAgICAgIHRleHQ6ICdTdXN0YWluYWJsZSBldGhpY2FsIHNtYWxsIGJhdGNoIGV2ZXJ5ZGF5IGNhcnJ5IHNlbWlvdGljcyBzd2FnIGJsdWUgYm90dGxlIGZpbmdlcnN0YWNoZS4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdpbWFnZXMvbWVudXMvZGlubmVyMS5qcGcnLFxuICAgICAgaW1hZ2VBbHQ6ICdkaW5uZXIgZG91YmxlJyxcbiAgICAgIHRpdGxlOiAnRGlubmVyIERvdWJsZScsXG4gICAgICBwcmljZTogJyQ3Ljk5JyxcbiAgICAgIHRleHQ6ICdPbWJ1Y2hhIGNoaWxsd2F2ZSBmYW5ueSBwYWNrIDMgd29sZiBtb29uIHN0cmVldCBhcnQgcGhvdG8gYm9vdGggYmVmb3JlIHRoZXkgc29sZCBvdXQgb3JnYW5pYyB2aXJhbC4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdpbWFnZXMvbWVudXMvc3VwcGVyMi5qcGcnLFxuICAgICAgaW1hZ2VBbHQ6ICd0b21hdG8gc3RlYWsnLFxuICAgICAgdGl0bGU6ICdUb21hdG8gU3RlYWsnLFxuICAgICAgcHJpY2U6ICckMTkuOTknLFxuICAgICAgdGV4dDogJ09tYnVjaGEgY2hpbGx3YXZlIGZhbm55IHBhY2sgMyB3b2xmIG1vb24gc3RyZWV0IGFydCBwaG90byBib290aCBiZWZvcmUgdGhleSBzb2xkIG91dCBvcmdhbmljIHZpcmFsLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2ltYWdlcy9tZW51cy9zdXBwZXIyLmpwZycsXG4gICAgICBpbWFnZUFsdDogJ2NvdW50cnkgZGVsaWdodCcsXG4gICAgICB0aXRsZTogJ0NvdW50cnkgRGVsaWdodCcsXG4gICAgICBwcmljZTogJyQxMi45OScsXG4gICAgICB0ZXh0OiAnU3VzdGFpbmFibGUgZXRoaWNhbCBzbWFsbCBiYXRjaCBldmVyeWRheSBjYXJyeSBzZW1pb3RpY3Mgc3dhZyBibHVlIGJvdHRsZSBmaW5nZXJzdGFjaGUuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlU3JjOiAnaW1hZ2VzL21lbnVzL2Rpbm5lcjEuanBnJyxcbiAgICAgIGltYWdlQWx0OiAnY2xhc3NpYyBwaXp6YScsXG4gICAgICB0aXRsZTogJ0NsYXNzaWMgUGl6emEnLFxuICAgICAgcHJpY2U6ICckMTUuOTknLFxuICAgICAgdGV4dDogJ09tYnVjaGEgY2hpbGx3YXZlIGZhbm55IHBhY2sgMyB3b2xmIG1vb24gc3RyZWV0IGFydCBwaG90byBib290aCBiZWZvcmUgdGhleSBzb2xkIG91dCBvcmdhbmljIHZpcmFsLicsXG4gICAgfSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBtZW51SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtZW51SW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgIG1lbnVJbWFnZS5zcmMgPSBtZW51SXRlbXNbaV0uaW1hZ2VTcmM7XG4gICAgbWVudUltYWdlLmFsdCA9IG1lbnVJdGVtc1tpXS5pbWFnZUFsdDtcblxuICAgIGNvbnN0IG1lbnVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUluZm8uY2xhc3NMaXN0LmFkZCgnbWVudS1pbmZvJyk7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaV0udGl0bGU7XG5cbiAgICBjb25zdCBtZW51UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG1lbnVQcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LXByaWNlJyk7XG4gICAgbWVudVByaWNlLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldLnByaWNlO1xuXG4gICAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudS10ZXh0Jyk7XG4gICAgbWVudVRleHQudGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaV0udGV4dDtcblxuICAgIG1lbnVIZWFkZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBtZW51SGVhZGVyLmFwcGVuZENoaWxkKG1lbnVQcmljZSk7XG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUluZm8pO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICB9XG5cbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVXcmFwcGVyKCkge1xuICBjb25zdCBtZW51V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWNvbnRhaW5lclwiKTsgLy8gYWRkIGhpZGUtY29udGFpbmVyIGNsYXNzXG4gIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gIHJldHVybiBtZW51V3JhcHBlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudVdyYXBwZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVNZW51V3JhcHBlciBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdFdyYXBwZXIgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVOYXZJdGVtICh0ZXh0LCB1cmwsIGlkKSB7XG4gIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBuYXZMaW5rLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbmF2TGluay5ocmVmID0gdXJsO1xuICBuYXZMaW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJyk7XG4gIG5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hTZWN0aW9uKGlkKSk7XG4gIG5hdkl0ZW0uYXBwZW5kQ2hpbGQobmF2TGluayk7XG4gIHJldHVybiBuYXZJdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSAnUmlvbGEnO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW5hbWUnKTtcbiAgbmF2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdkxpbmtzLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rcycpO1xuICBuYXZMaW5rcy5hcHBlbmRDaGlsZChjcmVhdGVOYXZJdGVtKCdob21lJywgJyMnLCAnaG9tZScpKTtcbiAgbmF2TGlua3MuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2SXRlbSgnbWVudScsICcjJywgJ21lbnUnKSk7XG4gIG5hdkxpbmtzLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkl0ZW0oJ2NvbnRhY3QnLCAnIycsICdjb250YWN0JykpO1xuICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbmFtZSA9ICdCaXNtYXJrIEFneWFyZSc7XG4gIGNvbnN0IGdpdGh1YlVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vYmlzbWFya2FneWFyZSc7XG5cbiAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJDb250ZW50LmlubmVySFRNTCA9IGAmY29weTsgJHtjdXJyZW50WWVhcn0gJHtuYW1lfVxuICA8YSBocmVmPVwiJHtnaXRodWJVcmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgIDxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT5cbiAgPC9hPmBcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hTZWN0aW9uKGlkKSB7XG4gIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG5cbiAgaWYgKGlkID09PSAnaG9tZScpIHtcbiAgICBob21lU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBtZW51U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnRhY3RTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0gZWxzZSBpZiAoaWQgPT09ICdtZW51Jykge1xuICAgIGhvbWVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWVudVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY29udGFjdFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSBlbHNlIHtcbiAgICBob21lU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1lbnVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29udGFjdFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBpbml0V2Vic2l0ZSgpIHtcbiAgY29uc3QgbmF2YmFyID0gY3JlYXRlTmF2YmFyKCk7XG4gIGNvbnN0IGhvbWVTZWN0aW9uID0gY3JlYXRlSG9tZSgpO1xuICBob21lU2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTsgLy8gYWRkIElEIHRvIGhvbWUgc2VjdGlvblxuICBjb25zdCBtZW51U2VjdGlvbiA9IGNyZWF0ZU1lbnVXcmFwcGVyKCk7XG4gIG1lbnVTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpOyAvLyBhZGQgSUQgdG8gbWVudSBzZWN0aW9uXG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gY3JlYXRlQ29udGFjdFdyYXBwZXIoKTtcbiAgY29udGFjdFNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG4gIGNvbnN0IGZvb3RlclNlY3Rpb24gPSBjcmVhdGVGb290ZXIoKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVTZWN0aW9uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlclNlY3Rpb24pO1xufVxuXG5pbml0V2Vic2l0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==