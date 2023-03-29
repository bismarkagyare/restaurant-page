function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const menuImage = document.createElement('img');
  menuImage.classList.add('menu-image');
  menuImage.src = 'images/menus/breakfast1.jpg';
  menuImage.alt = 'breakfast1';

  const menuInfo = document.createElement('div');
  menuInfo.classList.add('menu-info');

  const menuHeader = document.createElement('header');
  const menuTitle  = document.createElement('h4');
  menuTitle.textContent = 'toasted grapy bread';

  const menuPrice = document.createElement('h4');
  menuPrice.classList.add('menu-price');
  menuPrice.textContent = '$15.99';

  const menuText = document.createElement('p');
  menuText.classList.add('menu-text');
  menuText.textContent = 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.';

  menuHeader.appendChild(menuTitle);
  menuHeader.appendChild(menuPrice);
  menuInfo.appendChild(menuHeader);
  menuInfo.appendChild(menuText);
  menuItem.appendChild(menuImage);
  menuItem.appendChild(menuInfo);
  menuContainer.appendChild(menuItem);

  return menuContainer;
}

export default createMenu;