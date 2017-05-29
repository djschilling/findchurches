var churches = [
	{name: 'Evangelische Kirchengemeinde', city: 'Gomaringen', lat: 48.45246, lng: 9.0931113, website: 'http://kirche-gomaringen.de/' },
	{name: 'Peterskirche', city: 'Dusslingen', lat: 48.4514457, lng: 9.0501535, website: 'http://www.evangelische-kirche-dusslingen.de/'}
];

function initMap() {
	var gomaringen = {lat: 48.45246, lng: 9.0931113};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: gomaringen
	});
	churches.forEach(function (church) {
		var marker = new google.maps.Marker({
			position: {lat: church.lat, lng: church.lng},
			map: map,
			title: church.name + ' in ' + church.city
		});
		marker.addListener('click', function() {
			showDetails(church);
		});
	});
}

function showDetails(church) {
	$header = $('<h1>').text(church.name + ' in ' + church.city);
	var $details = $('#details');
	$details.html('');
	$details.append($header)
	$details.append($('<div>').html('<a href="' + church.website +'">Zur Webseite</a>'));

}
