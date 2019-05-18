var lat1 = 35.70918, lng1 = 139.729522;
var lat2 = -25.692701, lng2 = -54.440603;
var lat_diff = (lat2-lat1)/100, lng_diff = (lng2-lng1)/100;

function initialize(){
 	let ymap = new Y.Map("map");
 	let latlng = new Y.LatLng(lat1,lng1) ;
 	ymap.drawMap(latlng, 4, Y.LayerSetId.PHOTO);
	lat_now = lat1, lng_now = lng1;
}

function satelite() {
	let ymap = new Y.Map('map');
  let latlng = new Y.LatLng(lat1,lng1);
  ymap.drawMap(latlng, 4, Y.LayerSetId.PHOTO);
	
	let count = 0;
	var move = setInterval(function() {
		if ( count == 100 ) {
			clearInterval(move);
			window.setTimeout(initialize,1000);
		}
		count++;
		lat_now += lat_diff;
		lng_now += lng_diff;
		ymap.panTo(new Y.LatLng(lat_now,lng_now),true);
	},200);

}
