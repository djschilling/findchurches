var churches = [
	{name: 'Evangelische Kirchengemeinde', city: 'Gomaringen', lat: 48.45246, lng: 9.0931113, website: 'http://kirche-gomaringen.de/' },
	{name: 'Peterskirche', city: 'Dusslingen', lat: 48.4514457, lng: 9.0501535, website: 'http://www.evangelische-kirche-dusslingen.de/'}
];

function initMap() {
	$.ajax({
		type: 'GET',
		url: 'https://parse.buddy.com/parse/classes/churches',
		dataType: 'json',
		headers: {
			'X-Parse-Application-Id' : '430ddd14-5f2d-41a2-8a15-53c216e5d90b',
			'X-Parse-REST-API-Key' : 'Kq8lTFun90NspXE7qfT9LlXbMAG2Kqaq'
		},
		success: function (data) {
			churches = data.results;
			drawMarkers();
		}
	});
}

function showDetails(church) {
	$header = $('<h1>').text(church.name + ' in ' + church.city);
	var $details = $('#details');
	$details.html('');
	$details.append($header)
	$details.append($('<div>').html('<a href="' + church.website +'">Zur Webseite</a>'));

}

function drawMarkers() {
	var gomaringen = {lat: 48.45246, lng: 9.0931113};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: gomaringen
	});
	churches.forEach(function (church) {
		var markerOptions = {
			position: {lat: church.location.latitude, lng: church.location.longitude},
			map: map,
			title: church.name + ' in ' + church.city
		};
		console.log(markerOptions);
		var marker = new google.maps.Marker(markerOptions);
		marker.addListener('click', function() {
			showDetails(church);
		});
	});
}
