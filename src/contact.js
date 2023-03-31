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

export default createContactWrapper;