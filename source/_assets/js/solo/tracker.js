////////////////////////////////////////////////////////////////////////
// Google Map API
//


// var markers = (function () {
//     var json = null;
//     $.ajax({
//         'async': false,
//         'global': false,
//         'url': "assets/json/google.json",
//         'dataType': "json",
//         'success': function (data) {
//             json = data;
//         }
//     });
//     return json;
// })(); 


// window.onload = function () {
//     LoadMap();
// }

// function LoadMap() {
//     var mapOptions = {
//       center: {lat: 34.187, lng: -96.679},
//       zoom: 5,
//       mapTypeControl: false,
//       streetViewControl: false,
//       styles: [
//         {elementType: 'geometry', stylers: [{color: '#6342FF'}]},
//         {elementType: 'labels.text.stroke', stylers: [{visibility: 'off'}]},
//         {elementType: 'labels.text.fill', stylers: [{color: '#9E98FF'}]},
//         {
//           featureType: 'administrative.locality',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#9E98FF'}]
//         },
//         {
//           featureType: 'administrative.locality',
//           elementType: 'labels.text.stroke',
//           stylers: [{visibility: 'off'}]
//         },
//         {
//           featureType: 'poi',
//           stylers: [{visibility: 'off'}]
//         },
//         {
//           featureType: 'road',
//           stylers: [{visibility: 'off'}]
//         },
//         {
//           featureType: 'transit',
//           stylers: [{visibility: 'off'}]
//         },
//         {
//           featureType: 'water',
//           elementType: 'geometry',
//           stylers: [{color: '#4D2CC8'}]
//         }
//       ]
//     };
//     var infoWindow = new google.maps.InfoWindow();
//     var latlngbounds = new google.maps.LatLngBounds();
//     var map = new google.maps.Map(document.getElementById("map"), mapOptions);

//     for (var i = 0; i < markers.length; i++) {
//         var data = markers[i]
//         var myLatlng = new google.maps.LatLng(data.lat, data.lon);
//         var marker = new google.maps.Marker({
//             position: myLatlng,
//             map: map,
//             title: data.name
//         });
//         (function (marker, data) {
//             google.maps.event.addListener(marker, "click", function (e) {
//                 infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.file + "</div>");
//                 infoWindow.open(map, marker);
//             });
//         })(marker, data);
//         latlngbounds.extend(marker.position);
//     }
//     var bounds = new google.maps.LatLngBounds();
//     // map.setCenter(latlngbounds.getCenter());
//     // map.fitBounds(latlngbounds);
// }

















// // var map;

// function initMap() {
//   // Styles a map in night mode.
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 34.187, lng: -96.679}, // USA
//     // center: {lat: 32.093773, lng: 33.420410}, // Israel zoom 9
//     zoom: 5,
//     mapTypeControl: false,
//     streetViewControl: false,
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

//   // Load JSON Data
//   var json = map.data.loadGeoJson('assets/json/google.json');

//   var myMarker = '/assets/images/icons/ct-marker.png';
//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     icon: myMarker
//   });

//   // // Set mouseover event for each feature.
//   // map.data.addListener('mouseover', function(event) {
//   //   document.getElementById('info-box').textContent =
//   //       event.feature.getProperty('country');
//   // });

// } // End initMap()














// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 22.821757, lng: -24.433594}, // West Africa
    // center: {lat: 34.187, lng: -96.679}, // USA zoom 5
    // center: {lat: 32.093773, lng: 33.420410}, // Israel zoom 9
    zoom: 3,
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
  map.data.loadGeoJson('assets/json/google.json');
  setMarkers(map);

}

// // Data for the markers consisting of a name, a LatLng and a zIndex for the
// // order in which these markers should display on top of each other.
// var beaches = [
//   ['Bondi Beach', -33.890542, 151.274856, 4],
//   ['Coogee Beach', -33.923036, 151.259052, 5],
//   ['Cronulla Beach', -34.028249, 151.157507, 3],
//   ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
//   ['Maroubra Beach', -33.950198, 151.259302, 1]
// ];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: '/assets/images/icons/ct-marker.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < features.length; i++) {
    var feature = features[i];
    var marker = new google.maps.Marker({
      position: {lat: feature[1], lng: feature[2]},
      map: map,
      icon: image,
      shape: shape,
      title: feature[0],
      zIndex: feature[3]
    });
  }
}










// var infowindow = new google.maps.InfoWindow();
// function gotoFeature(featureNum) {
//     var feature = map.data.getFeatureById(features[featureNum].getId());
//     if (!!feature) google.maps.event.trigger(feature, 'changeto', {feature: feature});
//     else alert('feature not found!');
// }

// function initMap() {
//   // Create a simple map.
//   features = [];
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 34.187, lng: -96.679},
//     zoom: 5,
//     mapTypeControl: false,
//     streetViewControl: false,
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

//      map.data.loadGeoJson('assets/json/google.json');


//     google.maps.event.addListener(map,'click',function() {
//         infowindow.close();
//     });
//     map.data.setStyle({fillOpacity:.8});
//   // Load a GeoJSON from the same server as our demo.
//   var featureId = 0;
//   google.maps.event.addListener(map.data,'addfeature',function(e){
//       if(e.feature.getGeometry().getType()==='Polygon'){
//           features.push(e.feature);
//           var bounds=new google.maps.LatLngBounds();
          
//           e.feature.getGeometry().getArray().forEach(function(path){
          
//              path.getArray().forEach(function(latLng){bounds.extend(latLng);})
          
//           });
//           e.feature.setProperty('bounds',bounds);
//           e.feature.setProperty('featureNum',features.length-1);
          
          
        
//         }
//   });
//   // When the user clicks, open an infowindow
//   map.data.addListener('click', function(event) {
//           var myHTML = event.feature.getProperty("country");
//       infowindow.setContent("<div style='width:150px; text-align: center;'>"+myHTML+"</div>");
//           infowindow.setPosition(event.feature.getGeometry().get());
//       infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
//           infowindow.open(map);
//   });    
  
  
// }