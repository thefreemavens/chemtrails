////////////////////////////////////////////////////////////////////////
// Google Map API
//

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 22.821757, lng: -24.433594}, // West Africa
    // center: {lat: 34.187, lng: -96.679}, // USA zoom 5
    // center: {lat: 32.093773, lng: 33.420410}, // Israel zoom 9
    zoom: 3,
    mapTypeControl: false,
    disableDefaultUI: true,
    // streetViewControl: false,
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

  setMarkers(map);
}

var trails = [
  ['20171201-085354',32.100522,34.774475,'Israel','','Tel Aviv','November 28, 2017','15:33','Zohary','20171201-1533-israel-tel-aviv-zohary'],
  ['20171130-153901',25.88301,-80.227661,'USA','FL','Miami','October 13, 2015','11:36','AdamB','20171130-1136-usa-fl-miami-adamb'],
  ['20171130-153429',39.329252,-74.657593,'USA','NJ','Atlantic City','October 12, 2015','11:35','AdamB','20171130-1135-usa-nj-atlantic-city-adamb'],
  ['20171130-152539',40.6418908,-73.9637404,'USA','NY','New York','October 12, 2015','11:23','AdamB','20171130-1123-usa-ny-new-york-adamb'],
  ['20171130-101547',32.341566,34.852066,'Israel','','Netanya','November 19, 2014','16:20','SolRray','20171130-1620-israel-netanya-solrray'],
  ['20171129-234754',32.199093,34.806747,'Israel','','Herzliya','December 6, 2014','11:35','solRray','20171129-1135-israel-herzliya-solrray']
];

function setMarkers(map) {
  // Set Markers
  var image = { url: '/assets/images/icons/my-marker-l.png' };
  for (var i = 0; i < trails.length; i++) {
    var trail = trails[i];
    var title = trail[5] + ", " + trail[3] + " on " + trail[6];
    var marker = new google.maps.Marker({
      position: {lat: trail[1], lng: trail[2]},
      map: map,
      icon: image,
      title: title
      // zIndex: trail[0]
    });
    // Markers click event
    google.maps.event.addListener(marker, 'click', function() {
      // $('#myModal').modal('show');
      // map.setZoom(8);
    });
  
  }
}



// ////////////////////////////////////////////////////////////////////////
// // Google Map API
// //

// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: {lat: 22.821757, lng: -24.433594}, // West Africa
//     // center: {lat: 34.187, lng: -96.679}, // USA zoom 5
//     // center: {lat: 32.093773, lng: 33.420410}, // Israel zoom 9
//     zoom: 3,
//     mapTypeControl: false,
//     disableDefaultUI: true,
//     // streetViewControl: false,
//     styles: [
//       {elementType: 'geometry', stylers: [{color: '#6342FF'}]},
//       {elementType: 'labels.text.stroke', stylers: [{visibility: 'off'}]},
//       {elementType: 'labels.text.fill', stylers: [{color: '#9E98FF'}]},
//       {
//         featureType: 'administrative.locality',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#9E98FF'}]
//       },
//       {
//         featureType: 'administrative.locality',
//         elementType: 'labels.text.stroke',
//         stylers: [{visibility: 'off'}]
//       },
//       {
//         featureType: 'poi',
//         stylers: [{visibility: 'off'}]
//       },
//       {
//         featureType: 'road',
//         stylers: [{visibility: 'off'}]
//       },
//       {
//         featureType: 'transit',
//         stylers: [{visibility: 'off'}]
//       },
//       {
//         featureType: 'water',
//         elementType: 'geometry',
//         stylers: [{color: '#4D2CC8'}]
//       }
//     ]
//   });
//   map.data.loadGeoJson('assets/json/google.json');
  
//   map.data.setStyle({
//     icon: '/assets/images/icons/my-marker-l.png'
//   });

// }