const mapboxgl = require("mapbox-gl");
const createMarker = require("./marker")

mapboxgl.accessToken = 'pk.eyJ1IjoiZnVsbHN0YWNrc2hlbGkiLCJhIjoiY2s5c28wdnRwMTc4ZDNmcXN0cXhvbzFlYSJ9.ZzByWCyemF0W1UIvSltZag';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});



const newMarker = createMarker('activity', [-74.009151, 40.705086])
newMarker.addTo(map)

// new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago
