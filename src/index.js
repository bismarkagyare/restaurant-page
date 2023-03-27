function createHeader () {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const restaurantName = document.createElement('div');
  restaurantName.textContent = 'Riola';
  restaurantName.classList.add('restaurant-name');

  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav-links');

  const home = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.textContent = 'home';
  homeLink.href = '#';
  home.appendChild(homeLink);

  const menu = document.createElement('li');
  const menuLink = document.createElement('a');
  menuLink.textContent = 'menu';
  menuLink.href = '#';
  menu.appendChild(menuLink);

  const contact = document.createElement('li');
  const contactLink = document.createElement('a');
  contactLink.textContent = 'contact';
  contactLink.href = '#';
  contact.appendChild(contactLink);

  const className = 'nav-link';
  [home, menu, contact].forEach(navlink => {
    navlink.classList.add(className);
  });

  navLinks.appendChild(home);
  navLinks.appendChild(menu);
  navLinks.appendChild(contact);

  nav.appendChild(restaurantName);
  nav.appendChild(navLinks);

  const content = document.getElementById('content');
  content.appendChild(nav);
}

createHeader();