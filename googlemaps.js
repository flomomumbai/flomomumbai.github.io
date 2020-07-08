
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: {lat: 19.076656,lng: 72.877176},styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},
  {"featureType":"landscape","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},
  {"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},
  {"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"simplified"}]},
  {"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},
  {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},
  {"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff3500"}]},
  {"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#acff00"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"on"}]},
  {"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"on"}]},
  {"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"on"}]},
  {"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#bfb6b6"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"}]},
  {"featureType":"water","elementType":"geometry","stylers":[{"color":"#12608d"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]});

}
  function markers() {

        var map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: {lat: 19.076656,lng: 72.877176}});
          var locations = [['Andheri Fire Station', 19.112269, 72.840663], ['B Ward Office', 18.9614551, 72.8333212], ['Bandra Fire Station', 19.0503912, 72.8374773], ['Bhandup Complex', 19.1599078, 72.9239095], ['BKC Fire Station', 19.0703913, 72.8681195],
         ['Borivali Fire Station', 19.2296608, 72.8406847], ['Britannia Storm Water Pumping Station Mumbai', 18.9784538, 72.8121079], ['Building Proposal Office Vikhroli', 19.1176878, 72.92642], ['Byculla Fire Station', 18.9724232, 72.8319586], ['C Ward Office', 18.946123, 72.8249009], ['Chembur Fire Station', 19.0545687, 72.89359],
         ['City Institute Of Disaster Management parel', 18.9949756, 72.8405544],['Chincholi Fire Station', 19.112269, 72.840663], ['Colaba Fire Station', 18.9154742, 72.8260795], ['Colaba Pumping Station', 18.9076674, 72.8178695], ['Cooper Hospital', 19.1077678, 72.8362055], ['D Ward Office', 19.0222358, 72.8664991],
         ['Dadar Fire Station', 19.014298, 72.8455827], ['Dahisar Fire Station', 19.2475989, 72.8625351], ['Dharavi Fire Station', 19.039303, 72.8499501], ['Dindoshi Fire Station', 19.1750357, 72.8609866], ['F North Ward Office', 19.0294197, 72.8546058], ['F South Ward Office', 19.0059017, 72.8396856],
         ['G South Ward Office', 19.0083734, 72.8304087], ['Gawanpada Fire Station', 19.1720498, 72.9663645], ['Grant Road Eye Hospital', 18.9661863, 72.8195919], ['H West Ward Office', 19.0561063, 72.8352939], ['Haji Ali Pumping Station', 18.9784538, 72.8121079], ['HBT Trauma Hospital', 19.1410465, 72.8541015],
         ['K East Ward Office', 19.1203811, 72.8523182],['K West Ward Office', 19.1195001, 72.844486], ['Kandivali Fire Station', 19.2059829, 72.8504328], ['Kandivali Workshop', 19.2069415, 72.8244548], ['Kurla Fire Station', 19.0844942, 72.8860674], ['L Ward Office', 19.0704672, 72.8790936],
         ['M East Ward Office', 19.0563545, 72.920824], ['M West Ward Office', 19.0611012, 72.8993043], ['Malbar Hill', 18.9547975, 72.7984522], ['Malwani Fire Station', 19.196032, 72.8221149], ['Mandavi Fire Station', 18.9582963, 72.838941], ['Marol Fire Station', 19.1094559, 72.8776018],
         ['Memonwada Fire Station', 18.9579624, 72.8327018], ['Mulund Fire Station', 19.1753292, 72.942664], ['Municipal Head Office, Mumbai', 18.9403642, 72.834503], ['N Ward Office', 19.0839316, 72.9064422], ['Nair Hospital', 18.9712447, 72.8209136], ['Nariman Point Fire Station', 18.9230687, 72.826101],
         ['P North Ward Office', 19.1877853, 72.8423072], ['P South Ward Office', 19.1626595, 72.8464575], ['Prabodhankar Thackeray Natya Mandir', 19.2329298, 72.8546206], ['Rawali Camp Fire Station', 19.0355154, 72.8668983], ['S Ward Office', 19.1390295, 72.9304517], ['SWM Santacruz Workshop', 19.0843377, 72.8359724],
         ['SWD Workshop Dadar', 19.0125054, 72.8373092], ['Versova Pumping Station', 19.142988, 72.820361], ['Vikhroli Fire Station', 19.1009895, 72.918176], ['Vile Parle Fire Station', 19.0926029, 72.8440694], ['Wadala Fire Station', 19.0248942, 72.8702793], ['Worli Fire Station', 19.0133214, 72.8236434]];
         var contents=[];
         var spreadsheetID = '1iiTSauIbSLKFAuhSJkDd-tNv4r1rUD3XAf1FXHSgtPg';
         var worksheetID = 'od6';
         var url = 'https://spreadsheets.google.com/feeds/list/'+spreadsheetID+'/'+worksheetID+'/public/values?alt=json';

        $.getJSON(url,function(data){
          $.each(data.feed.entry,function(i,val){
            var cont = "15 Min : " + val.gsx$min.$t + '<br>' + " 1 Hour : " + val.gsx$min_2.$t + '<br>' + " 6 Hours : " + val.gsx$hr_2.$t  + '<br>' + " 24 Hours : " + val.gsx$hr_4.$t ;
            contents.push(cont);
          });
        })
      var infowindow = new google.maps.InfoWindow();
      var marker, i;
      for (i = 0; i < locations.length; i++) {
         marker = new google.maps.Marker({
           position: new google.maps.LatLng(locations[i][1], locations[i][2]),
           icon: "w.png",
           map: map
         });
         google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent('<h2>' + locations[i][0] + '</h2>' + '<h3>' + "Rainfall Data (mm)" + '</h3>' + contents[i]);
              infowindow.open(map, marker);
            }
          })(marker, i));
    }
    var iconBase = 'img/';
          var icons = {
            aws: {
              name: 'Rain Gauge Sites',
              icon: iconBase + 'w2.png'
            },
            wat: {
              name: 'Waterlogging Sites',
              icon: iconBase + 'w2.png'
            },
          };

    var legend = document.getElementById('legend');
         for (var key in icons) {
           var type = icons[key];
           var name = type.name;
           var icon = type.icon;
           var div = document.createElement('div');
           div.innerHTML = '<img src="' + icon + '"> ' + name;
           legend.appendChild(div);
         }

         map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}
function Theatmap() {

var heatmap;
var map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: {lat: 19.076656,lng: 72.877176}, mapTypeId: 'roadmap'});
var spreadsheetID = '1iiTSauIbSLKFAuhSJkDd-tNv4r1rUD3XAf1FXHSgtPg';
var worksheetID = 'od6';
var i;
var url = 'https://spreadsheets.google.com/feeds/list/'+spreadsheetID+'/'+worksheetID+'/public/values?alt=json';
var locations = [['Andheri Fire Station', 19.112269, 72.840663], ['B Ward Office', 18.9614551, 72.8333212], ['Bandra Fire Station', 19.0503912, 72.8374773], ['Bhandup Complex', 19.1599078, 72.9239095], ['BKC Fire Station', 19.0703913, 72.8681195],
['Borivali Fire Station', 19.2296608, 72.8406847], ['Britannia Storm Water Pumping Station Mumbai', 18.9784538, 72.8121079], ['Building Proposal Office Vikhroli', 19.1176878, 72.92642], ['Byculla Fire Station', 18.9724232, 72.8319586], ['C Ward Office', 18.946123, 72.8249009], ['Chembur Fire Station', 19.0545687, 72.89359],
['City Institute Of Disaster Management parel', 18.9949756, 72.8405544],['Chincholi Fire Station', 19.112269, 72.840663], ['Colaba Fire Station', 18.9154742, 72.8260795], ['Colaba Pumping Station', 18.9076674, 72.8178695], ['Cooper Hospital', 19.1077678, 72.8362055], ['D Ward Office', 19.0222358, 72.8664991],
['Dadar Fire Station', 19.014298, 72.8455827], ['Dahisar Fire Station', 19.2475989, 72.8625351], ['Dharavi Fire Station', 19.039303, 72.8499501], ['Dindoshi Fire Station', 19.1750357, 72.8609866], ['F North Ward Office', 19.0294197, 72.8546058], ['F South Ward Office', 19.0059017, 72.8396856],
['G South Ward Office', 19.0083734, 72.8304087], ['Gawanpada Fire Station', 19.1720498, 72.9663645], ['Grant Road Eye Hospital', 18.9661863, 72.8195919], ['H West Ward Office', 19.0561063, 72.8352939], ['Haji Ali Pumping Station', 18.9784538, 72.8121079], ['HBT Trauma Hospital', 19.1410465, 72.8541015],
['K East Ward Office', 19.1203811, 72.8523182],['K West Ward Office', 19.1195001, 72.844486], ['Kandivali Fire Station', 19.2059829, 72.8504328], ['Kandivali Workshop', 19.2069415, 72.8244548], ['Kurla Fire Station', 19.0844942, 72.8860674], ['L Ward Office', 19.0704672, 72.8790936],
['M East Ward Office', 19.0563545, 72.920824], ['M West Ward Office', 19.0611012, 72.8993043], ['Malbar Hill', 18.9547975, 72.7984522], ['Malwani Fire Station', 19.196032, 72.8221149], ['Mandavi Fire Station', 18.9582963, 72.838941], ['Marol Fire Station', 19.1094559, 72.8776018],
['Memonwada Fire Station', 18.9579624, 72.8327018], ['Mulund Fire Station', 19.1753292, 72.942664], ['Municipal Head Office, Mumbai', 18.9403642, 72.834503], ['N Ward Office', 19.0839316, 72.9064422], ['Nair Hospital', 18.9712447, 72.8209136], ['Nariman Point Fire Station', 18.9230687, 72.826101],
['P North Ward Office', 19.1877853, 72.8423072], ['P South Ward Office', 19.1626595, 72.8464575], ['Prabodhankar Thackeray Natya Mandir', 19.2329298, 72.8546206], ['Rawali Camp Fire Station', 19.0355154, 72.8668983], ['S Ward Office', 19.1390295, 72.9304517], ['SWM Santacruz Workshop', 19.0843377, 72.8359724],
['SWD Workshop Dadar', 19.0125054, 72.8373092], ['Versova Pumping Station', 19.142988, 72.820361], ['Vikhroli Fire Station', 19.1009895, 72.918176], ['Vile Parle Fire Station', 19.0926029, 72.8440694], ['Wadala Fire Station', 19.0248942, 72.8702793], ['Worli Fire Station', 19.0133214, 72.8236434]];
var ht;
var htdata = [];
$.getJSON(url,function(data){
 $.each(data.feed.entry,function(i,val){
  var n = parseFloat(val.gsx$hr_4.$t);
  if(n>100){
    var latt = parseFloat(val.gsx$latitude.$t);
    var long = parseFloat(val.gsx$longitude.$t);
    ht = {location: new google.maps.LatLng(latt, long), weight: n};
    htdata.push(ht);
        }
 });
cal(htdata);
})

function cal(htdata)
{var pointArray = new google.maps.MVCArray(htdata);
 heatmap = new google.maps.visualization.HeatmapLayer({
         data: pointArray,
         map: map,
         radius: getNewRadius(),
         maxIntensity: 173
       });}
var spreadsheetID1 = '1ULpYAGPEPJWiXqsZdVNMwVhwy4xaKvcfDQtWEVcEDN0';
var worksheetID1 = 'od6';
var url1 = 'https://spreadsheets.google.com/feeds/list/'+spreadsheetID1+'/'+worksheetID1+'/public/values?alt=json';
var contents = [];
$.getJSON(url1,function(data){
 $.each(data.feed.entry,function(i,val){
   var cont1 = val.gsx$place.$t;
   var cont2 = parseFloat(val.gsx$lat.$t);
   var cont3 = parseFloat(val.gsx$long.$t);
   var cont = [cont1,cont2,cont3];
   contents.push(cont);
 });
 cal2(contents);
})
var infowindow = new google.maps.InfoWindow();
var marker, i;
function cal2(contents){ for (i = 0; i < contents.length; i++) {
marker = new google.maps.Marker({
  position: new google.maps.LatLng(contents[i][1], contents[i][2]),
  icon: 'w2.png',
  map: map
});
google.maps.event.addListener(marker, 'click', (function(marker, i) {
   return function() {
     infowindow.setContent('<h3>' + contents[i][0] +'</h3>');
     infowindow.open(map, marker);
   }
 })(marker, i));
}}

var desiredRadiusPerPointInMeters = 2000;
function getNewRadius() {


  var numTiles = 1 << map.getZoom();
  var center = map.getCenter();
  var moved = google.maps.geometry.spherical.computeOffset(center, 20000, 90); /*1000 meters to the right*/
  var projection = new MercatorProjection();
  var initCoord = projection.fromLatLngToPoint(center);
  var endCoord = projection.fromLatLngToPoint(moved);
  var initPoint = new google.maps.Point(
    initCoord.x * numTiles,
    initCoord.y * numTiles);
   var endPoint = new google.maps.Point(
    endCoord.x * numTiles,
    endCoord.y * numTiles);
var pixelsPerMeter = (Math.abs(initPoint.x-endPoint.x))/10000.0;
var totalPixelSize = Math.floor(desiredRadiusPerPointInMeters*pixelsPerMeter);
return totalPixelSize;

}
google.maps.event.addListener(map, 'zoom_changed', function () {
  heatmap.setOptions({radius:getNewRadius()});
});
var TILE_SIZE = 256;

//Mercator --BEGIN--
function bound(value, opt_min, opt_max) {
if (opt_min !== null) value = Math.max(value, opt_min);
if (opt_max !== null) value = Math.min(value, opt_max);
return value;
}

function degreesToRadians(deg) {
return deg * (Math.PI / 180);
}

function radiansToDegrees(rad) {
return rad / (Math.PI / 180);
}

function MercatorProjection() {
this.pixelOrigin_ = new google.maps.Point(TILE_SIZE / 2,
TILE_SIZE / 2);
this.pixelsPerLonDegree_ = TILE_SIZE / 360;
this.pixelsPerLonRadian_ = TILE_SIZE / (2 * Math.PI);
}

MercatorProjection.prototype.fromLatLngToPoint = function (latLng,
opt_point) {
var me = this;
var point = opt_point || new google.maps.Point(0, 0);
var origin = me.pixelOrigin_;

point.x = origin.x + latLng.lng() * me.pixelsPerLonDegree_;

var siny = bound(Math.sin(degreesToRadians(latLng.lat())), - 0.9999,
0.9999);
point.y = origin.y + 0.5 * Math.log((1 + siny) / (1 - siny)) * -me.pixelsPerLonRadian_;
return point;
};

MercatorProjection.prototype.fromPointToLatLng = function (point) {
var me = this;
var origin = me.pixelOrigin_;
var lng = (point.x - origin.x) / me.pixelsPerLonDegree_;
var latRadians = (point.y - origin.y) / -me.pixelsPerLonRadian_;
var lat = radiansToDegrees(2 * Math.atan(Math.exp(latRadians)) - Math.PI / 2);
return new google.maps.LatLng(lat, lng);
};
var iconBase = 'img/';
      var icons = {
        aws: {
          name: 'Rain Gauge Sites',
          icon: iconBase + 'w2.png'
        },
        wat: {
          name: 'Waterlogging Sites',
          icon: iconBase + 'w2.png'
        },
      };

var legend = document.getElementById('legend');
     for (var key in icons) {
       var type = icons[key];
       var name = type.name;
       var icon = type.icon;
       var div = document.createElement('div');
       div.innerHTML = '<img src="' + icon + '"> ' + name;
       legend.appendChild(div);
     }

     map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
//Mercator --END--
}
