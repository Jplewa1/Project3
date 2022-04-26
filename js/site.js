function initMap() {
  const chicago = {lat: 41.83480515321117, lng: -87.62700590000001};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: chicago,
    mapTypeId: 'terrain'
    });
    const marker = new google.maps.Marker({
      position: chicago,
      map: map,
    });
  }
  
  window.initMap = initMap;