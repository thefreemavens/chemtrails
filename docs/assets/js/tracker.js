function initMap(){setMarkers(new google.maps.Map(document.getElementById("map"),{zoom:10,center:{lat:22.821757,lng:-24.433594},zoom:3,mapTypeControl:!1,disableDefaultUI:!0,styles:[{elementType:"geometry",stylers:[{color:"#6342FF"}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#9E98FF"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#9E98FF"}]},{featureType:"administrative.locality",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#4D2CC8"}]}]}))}function setMarkers(e){for(var t={url:"/assets/images/icons/my-marker-l.png"},a=0;a<trails.length;a++){var l=trails[a],r=l[5]+", "+l[3]+" on "+l[6],i=new google.maps.Marker({position:{lat:l[1],lng:l[2]},map:e,icon:t,title:r});google.maps.event.addListener(i,"click",function(){})}}var trails=[["20171201-085354",32.100522,34.774475,"Israel","","Tel Aviv","November 28, 2017","15:33","Zohary","20171201-1533-israel-tel-aviv-zohary"],["20171130-153901",25.88301,-80.227661,"USA","FL","Miami","October 13, 2015","11:36","AdamB","20171130-1136-usa-fl-miami-adamb"],["20171130-153429",39.329252,-74.657593,"USA","NJ","Atlantic City","October 12, 2015","11:35","AdamB","20171130-1135-usa-nj-atlantic-city-adamb"],["20171130-152539",40.6418908,-73.9637404,"USA","NY","New York","October 12, 2015","11:23","AdamB","20171130-1123-usa-ny-new-york-adamb"],["20171130-101547",32.341566,34.852066,"Israel","","Netanya","November 19, 2014","16:20","SolRray","20171130-1620-israel-netanya-solrray"],["20171129-234754",32.199093,34.806747,"Israel","","Herzliya","December 6, 2014","11:35","solRray","20171129-1135-israel-herzliya-solrray"]];