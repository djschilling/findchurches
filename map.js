var churches = [
	{name: 'Landeskirche Gomaringen', city: 'Gomaringen', lat: 48.45246, lng: 9.0931113 },
	{name: 'Peterskirche', city: 'Dusslingen', lat: 48.4514457, lng: 9.0501535}
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
			map: map
		});
	});
}
