function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container', 'hide-container');

  const menuItems = [
    {
      imageSrc: 'images/menus/dinner1.jpg',
      imageAlt: 'toasted grapy bread',
      title: 'Toasted Grapy Bread',
      price: '$15.99',
      text: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
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

export default createMenu;
