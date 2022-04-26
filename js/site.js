function initMap() {
  const chicago = {lat: 41.83480515321117, lng: -87.62700590000001};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: chicago,
    mapTypeId: 'terrain'
    });
    var icon = {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Ambigram_Home_Away_-_black_vector.svg",
        scaledSize: new google.maps.Size(100, 100),
    };
    const marker = new google.maps.Marker({
      position: chicago,
      map: map,
      icon: icon,
    });
  }
  
  window.initMap = initMap;