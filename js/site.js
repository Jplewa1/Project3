function initMap() {
    const chicago = {lat: 41.85, lng: -87.65};
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