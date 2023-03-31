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
}