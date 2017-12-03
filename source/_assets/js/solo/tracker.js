var map;
var markers = []

// after the geojson is loaded, iterate through the map data to create markers
// and add the pop up (info) windows
function setMarkers() {
  console.log('creating markers');
  var infoWindow = new google.maps.InfoWindow();
  geojson_url = 'assets/json/google.json';
  $.getJSON(geojson_url, function(result) {
      // Post select to url.
      data = result['features']
      $.each(data, function(key, val) {
        var country = val['properties']['country'];
        var state   = val['properties']['state'];
        var city    = val['properties']['city'];
        var date    = val['properties']['date'];
        var photo   = val['properties']['photo'];
        var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSft4yPbSHeeG6GCopPI2CnIW4s98VqDfB_GH0qtHMW9lpm-xA/viewform'
        var icon    = { url: '/assets/images/icons/my-marker-l.png' };
        var point   = new google.maps.LatLng(parseFloat(val['geometry']['coordinates'][1]), parseFloat(val['geometry']['coordinates'][0]));
        var marker  = new google.maps.Marker({
          position: point,
          title: country,
          map: map,
          icon: icon,
          properties: val['properties']
         });

        var ctData =
          // '<div><h3>' + country + ' ' + city + ', on ' + date + '</h3></div>' +
          // '<div><h3>' + country + ' ' + city + ', on ' + date + '</h3></div>' +

          '<div class="tfm-card-image">' +
            '<a class="tfm-add-icon" href="' + formUrl + '" target="_blank">' +
            '<div class="tfm-add-icon-inner">' +
              '<span></span>' +
              '<span></span>' +
            '</div>' +
            '</a>' +
            '<div class="tfm-photo">' +
              '<img src="' + photo + '">' +
            '</div>' +
          '</div>' +

          '<main>' +
            '<h1>' + city + ', ' + state +'</h1>' +
            '<h2>' + date + '</h2>' +
            '<a href="#" class="tfm-counter">32</a>' +
            '<footer>' +
              '<hr>' +
              '<h3>' + point + '</h3>' +
            '</footer>' +
          '</main>;';


        marker.addListener('click', function() {
          // $('.modal').css('display', 'initial');
          $('.tfm-card').html(ctData)
        });
        markers.push(marker)
        
      });
  });

  $('.modal').click(function() {
    $('.modal').css('display', 'none');
    // $('#content').remove();
  });
}

function initMap() {
    map_options = {
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
    }
    
    map_document = document.getElementById('map')
    map = new google.maps.Map(map_document,map_options);
    setMarkers()
 
}

// google.maps.event.addDomListener(window, 'load', initMap);





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

//   setMarkers(map);
//   // setModal(map);
// }

// var trails = [
//   ['20171201-085354',32.100522,34.774475,'Israel','','Tel Aviv','November 28, 2017','15:33','Zohary','20171201-1533-israel-tel-aviv-zohary'],
//   ['20171130-153901',25.88301,-80.227661,'USA','FL','Miami','October 13, 2015','11:36','AdamB','20171130-1136-usa-fl-miami-adamb'],
//   ['20171130-153429',39.329252,-74.657593,'USA','NJ','Atlantic City','October 12, 2015','11:35','AdamB','20171130-1135-usa-nj-atlantic-city-adamb'],
//   ['20171130-152539',40.6418908,-73.9637404,'USA','NY','New York','October 12, 2015','11:23','AdamB','20171130-1123-usa-ny-new-york-adamb'],
//   ['20171130-101547',32.341566,34.852066,'Israel','','Netanya','November 19, 2014','16:20','SolRray','20171130-1620-israel-netanya-solrray'],
//   ['20171129-234754',32.199093,34.806747,'Israel','','Herzliya','December 6, 2014','11:35','solRray','20171129-1135-israel-herzliya-solrray']
// ];

// function setMarkers(map) {
//   // Set Markers
//   var image = { url: '/assets/images/icons/my-marker-l.png' };

//   for (var i = 0; i < trails.length; i++) {
//     var trail   = trails[i];
//     var country = trail[3];
//     var state   = trail[4];
//     var city    = trail[5];
//     var date    = trail[6];
//     var title   = city + isUSA() + ", " + country + " on " + date;
//     var content = 
//       '<div id="content">'+
//         '<div id="siteNotice"></div>'+
//         '<h1 id="firstHeading" class="firstHeading">' + trail[3] + '</h1>'+
//         '<div id="bodyContent">'+
//           '<p>' + trail[6] + '</p>'+
//         '</div>'+
//       '</div>';
//     var marker = new google.maps.Marker({
//       position: {lat: trail[1], lng: trail[2]},
//       map: map,
//       icon: image,
//       title: title
//       // zIndex: trail[0]
//     });
//     // Markers click event
//     google.maps.event.addListener(marker, 'click', function() {
//       $('.modal').css('display', 'initial');
//       // $(content).appendTo('.modal');
//       $('.modal').append(content);
//       // map.setZoom(8);
//     });

//     function isUSA() {
//       if(state.length == 2){
//          return ' ' + state;
//       }
//       else {
//         return '';
//       }
//     }
//   }
// }

// $( ".modal" ).click(function() {
//   $(this).css('display', 'none');
//   $('#content').remove();
// });













// function setModal(map) {
//   // Set Modal
//   // var image = { url: '/assets/images/icons/my-marker-l.png' };
//   for (var i = 0; i < trails.length; i++) {
//     var trail = trails[i];
//     var title = trail[5] + ", " + trail[3] + " on " + trail[6];
//     var content = 
//       '<div id="content">'+
//         '<div id="siteNotice"></div>'+
//         '<h1 id="firstHeading" class="firstHeading">' + trail[3] + '</h1>'+
//         '<div id="bodyContent">'+
//           '<p></p>'+
//         '</div>'+
//       '</div>';
//     // Markers click event
//     $('.modal').append(content);
//   };
// }





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