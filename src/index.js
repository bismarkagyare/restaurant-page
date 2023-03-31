import createHome from "./home";
import createMenuWrapper from "./menu";
import createContactWrapper from "./contact";

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
  const homeSection = createHome();
  homeSection.setAttribute('id', 'home'); // add ID to home section
  const menuSection = createMenuWrapper();
  menuSection.setAttribute('id', 'menu'); // add ID to menu section
  const contactSection = createContactWrapper();
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