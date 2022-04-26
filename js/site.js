function initMap() {
    const chicago = new google.maps.LatLng(41.85, -87.65);
    const map = new google.maps.Map(document.getElementById("map"), {
      center: chicago,
      zoom: 3,
    });
    const coordInfoWindow = new google.maps.InfoWindow();
  
    coordInfoWindow.setContent(createInfoWindowContent(chicago, map.getZoom()));
    coordInfoWindow.setPosition(chicago);
    coordInfoWindow.open(map);
    map.addListener("zoom_changed", () => {
      coordInfoWindow.setContent(createInfoWindowContent(chicago, map.getZoom()));
      coordInfoWindow.open(map);
    });
  }