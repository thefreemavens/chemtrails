function initMap(){var e=new google.maps.Map(document.getElementById("map"),{zoom:10,center:{lat:22.821757,lng:-24.433594},zoom:3,mapTypeControl:!1,streetViewControl:!1,styles:[{elementType:"geometry",stylers:[{color:"#6342FF"}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#9E98FF"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#9E98FF"}]},{featureType:"administrative.locality",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#4D2CC8"}]}]});e.data.loadGeoJson("assets/json/google.json"),setMarkers(e)}function setMarkers(e){for(var t={url:"/assets/images/icons/ct-marker.png",size:new google.maps.Size(20,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,32)},o={coords:[1,1,1,20,18,20,18,1],type:"poly"},s=0;s<features.length;s++){var l=features[s];new google.maps.Marker({position:{lat:l[1],lng:l[2]},map:e,icon:t,shape:o,title:l[0],zIndex:l[3]})}}