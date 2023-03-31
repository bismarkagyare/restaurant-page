function createContact() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const locationContainer = document.createElement('div');
  locationContainer.classList.add('location-container');
  const locationIcon = document.createElement('i');
  locationIcon.classList.add('fa fap-map-marker');
  const locationText = document.createElement('p');
  locationText.textContent = '1040 Gare de Train, Settat';

  const scheduleContainer = document.createElement('div');
  scheduleContainer.classList.add('schedule-container');
  const scheduleIcon = document.createElement('i');
  scheduleIcon.classList.add('fa fa-calender');
  const scheduleText = document.createElement('p');
  scheduleText.textContent = 'Monday-Friday: 8h-23h';

  const phoneContainer = document.createElement('div');
  phoneContainer.classList.add('phone-container');
  const phoneIcon = document.createElement('i');
  phoneIcon.classList.add('fa fa-phone');
  const phoneText = document.createElement('p');
  phoneText.textContent = '(060) 893 XXXX';

  const mapImage = document.createElement('img');
  mapImage.classList.add('map-image');
  mapImage.src = 'images/location.jpg';
  mapImage.alt = 'map-image';

  locationContainer.appendChild(locationIcon);
  locationContainer.appendChild(locationText);
  scheduleContainer.appendChild(scheduleIcon);
  scheduleContainer.appendChild(scheduleText);
  phoneContainer.appendChild(phoneIcon);
  phoneContainer.appendChild(phoneText);

  contactContainer.appendChild(locationContainer);
  contactContainer.appendChild(scheduleContainer);
  contactContainer.appendChild(phoneContainer);
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