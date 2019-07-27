
/* Function definitions */
function initializeUI() {

	/* Allow user input */
	$('#fade-wrapper').fadeOut();

	/* Initialize materialize side navigation bar */
	$('.sidenav').sidenav();

}

/* Wait for resources to load before executing script */
window.onload = function () {

	/* Block user input till app loads */
	$('#fade-wrapper').fadeIn();

	var db = null;

	/* Then wait an additional 3 seconds just in case */
	setTimeout(function () {

		/* Initialize Firebase */
		firebase.initializeApp({
			apiKey: "AIzaSyBZg6EM43j748Hz1ekFvAjwkmg_b3-zTQ8",
			authDomain: "open-house-projects.firebaseapp.com",
			databaseURL: "https://open-house-projects.firebaseio.com",
			projectId: "open-house-projects",
			storageBucket: "open-house-projects.appspot.com",
			messagingSenderId: "486323100514",
			appId: "1:486323100514:web:e364b2b87378683e"
		});

		/* Set the language */
		firebase.auth().languageCode = 'en-GB';

		/* Initialize Firestore */
		db = firebase.firestore();

		/* Set footer year */
		document.getElementById('footer_year').innerHTML = new Date().getFullYear();

		/* Initialize UI elements */
		initializeUI();

	}, 3000);

}