let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.834683, lng: -87.625958},
    zoom: 16,
  });
}

window.initMap = initMap;