function createHome () {
  const homeContainer = document.createElement('main');
  homeContainer.classList.add('home-container');

  const homeHeading = document.createElement('h3');
  homeHeading.classList.add('home-heading');
  homeHeading.textContent = 'Come enjoy some delicious marocain cuisines';

  const homeParagraph = document.createElement('p');
  homeParagraph.classList.add('home-paragraph');
  homeParagraph.textContent = 'Check out our menu below';

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

export default createHome;