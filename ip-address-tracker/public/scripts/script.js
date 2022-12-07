const GEOLOCATION_API_KEY = 'at_NiCM4kkZXoPKmtReDyazLdrKAxWJY';
const GEOLOCATION_BASE_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${GEOLOCATION_API_KEY}`;

const informationIP = document.getElementById('information-ip');
const informationLocation = document.getElementById('information-location');
const informationTimezone = document.getElementById('information-timezone');
const informationISP = document.getElementById('information-isp');

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('ip-or-domain');

// ### ### ### ### ###
// Map configs

const mapContainer = document.getElementById('map');
const map = L.map(mapContainer, {
  zoomControl: false,
}).setView([0, 0], 8);

const MARKER_ICON = L.icon({
  iconUrl: './public/images/icon-location.svg',
  iconSize: [50, 60],
});

let marker;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// ### ### ### ### ###
// Fucntionality

/**
 * @param {*} ipToLocate
 * Fetch the API, get the information for the given ip and
 * update the UI.
 */
const geolocateByIp = async (ipToLocate = '') => {
  try {
    const reply = await fetch(`${GEOLOCATION_BASE_URL}&ipAddress=${ipToLocate}`);
    const data = await reply.json();
    udpateUI(data);
  } catch {
    alert('Unable to find the given IP');
  }
};

/**
 * @param {*} domainToLocate
 * Fetch the API, get the information for the given domain and
 * update the UI
 */
const geolocateByDomain = async (domainToLocate = '') => {
  try {
    const reply = await fetch(`${GEOLOCATION_BASE_URL}&domain=${domainToLocate}`);
    const data = await reply.json();
    udpateUI(data);
  } catch {
    alert('Unable to find the given domain');
  }
};

/**
 * @param {*} data API response as JS object
 * Change the map location and the information shown in the
 * floating card
 */
const udpateUI = (data) => {
  console.log(data);
  const { ip, location, isp } = data;

  // Change map location
  map.flyTo([location.lat, location.lng], 8);

  if (!marker) {
    // Create the marker the first time
    marker = L.marker([location.lat, location.lng], { icon: MARKER_ICON }).addTo(map);
  } else {
    // Move the marker to the new point
    marker.setLatLng([location.lat, location.lng]);
  }

  // Change card information
  informationIP.textContent = ip;
  informationISP.textContent = isp;
  informationLocation.textContent = `${location.region}, ${location.city} ${location.postalCode}`;
  informationTimezone.textContent = `UCT ${location.timezone}`;
};

// ### ### ### ### ###
// Events
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const IP_OR_DOMAIN = data['ip-or-domain'];
  const ip_regexp = new RegExp(
    /(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})/g,
  );

  if (ip_regexp.test(IP_OR_DOMAIN)) geolocateByIp(IP_OR_DOMAIN);
  else geolocateByDomain(IP_OR_DOMAIN);
});

// Get user location on load
geolocateByIp('');
