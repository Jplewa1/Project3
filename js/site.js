let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.834683, lng: -87.625958},
    zoom: 16,
  });
}

window.initMap = initMap;

function initMap() {
    const chicago = {lat: 41.85, lng: -87.65};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: chicago,
    });
    const marker = new google.maps.Marker({
      position: chicago,
      map: map,
    });
  }
  
  window.initMap = initMap;