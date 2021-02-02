
  function initMap() {
    const Buenos_Aires = { lat: -34.60299, lng: -58.37736 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: Buenos_Aires,
    });
    const marker = new google.maps.Marker({
      position: Buenos_Aires,
      map,
      title: "El Palacio de la Pizza",
    });
  }
