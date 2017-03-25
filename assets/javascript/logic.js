var config = {
	apiKey: "AIzaSyBXHhfJKZu1Ixu7h8qx_S-h8SIQrpX24f0",
	authDomain: "real-estate-map-41372.firebaseapp.com",
	databaseURL: "https://real-estate-map-41372.firebaseio.com",
	storageBucket: "real-estate-map-41372.appspot.com",
	messagingSenderId: "587234586972"
};

firebase.initializeApp(config);

$("button").on("click", function() {

	var zpID = 'X1-ZWz19ajlgoj4ej_9y702';
	//var myid = prompt("Type a 8 digit #:");
	var queryURL = "http://www.zillow.com/webservice/GetZestimate.htm?zws-id="+ zpID +"&zpid=48749425";


	//comment
	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response) {
		console.log(response);

		var results = response.data;

		// for (var i = 0; i < results.length; i++) {

		// }
	});
});