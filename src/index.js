import createHome from "./home";


function createNavItem (text, url) {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');
  navLink.textContent = text;
  navLink.href = url;
  navLink.classList.add('nav-link');
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
  navLinks.appendChild(createNavItem('home', '#'));
  navLinks.appendChild(createNavItem('menu', '#'));
  navLinks.appendChild(createNavItem('contact', '#'));
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

function initWebsite() {
  const navbar = createNavbar();
  const homeSection = createHome();
  const footerSection = createFooter();

  const content = document.getElementById('content');
  content.appendChild(navbar);
  content.appendChild(homeSection);
  content.appendChild(footerSection);
}

initWebsite();
