////////////////////////////////////////////////////////////////////////
// Google Map API
//

var map;

function initMap() {
  // Styles a map in night mode.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.187, lng: -96.679},
    // center: {lat: 0, lng: 0},
    zoom: 5,
    mapTypeControl: false,
    streetViewControl: false,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#6342FF'}]},
      {elementType: 'labels.text.stroke', stylers: [{visibility: 'off'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#9E98FF'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9E98FF'}]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.stroke',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'road',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'transit',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#4D2CC8'}]
      }
    ]
  });

  // Load JSON Data
  var json = map.data.loadGeoJson('assets/json/google.json');

  // Creating a global infoWindow object that will be reused by all markers
  // var infoWindow = new google.maps.InfoWindow();

} // End initMap()