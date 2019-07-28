/* Super global variables */
var interval1 = null;

/* Function definitions */
function initializeUI() {

	/* Allow user input */
	$('#fade-wrapper').fadeOut();

	/* Initialize materialize side navigation bar */
	$('.sidenav').sidenav();

	/* Initialize materialize parallax */
	$('.parallax').parallax();

	/* Initialize materialize carousel */
	$('.carousel.carousel-slider').carousel({ fullWidth: true, indicators: true });
	if (interval1) clearInterval(interval1);
	interval1 = setInterval(function () { M.Carousel.getInstance(carousel1).next(); }, 5000);

	/* Initialize jqueryui scroll animations */
	$("#discover1").click(function () {
		$('html, body').animate({
			scrollTop: $("#section2-5").offset().top
		}, 2000);
	});
	$("#discover2").click(function () {
		$('html, body').animate({
			scrollTop: $("#section3-5").offset().top
		}, 2000);
	});
	$("#discover3").click(function () {
		$('html, body').animate({
			scrollTop: $("#section4-5").offset().top
		}, 2000);
	});

	/* Show carousel1 learn more button */
	document.getElementById('button_featured_learn_more').style.display = '';

	/* Show section1 */
	document.getElementById('section1').style.display = '';

	/* Show section2 */
	document.getElementById('section2').style.display = '';

	/* Show section3 */
	document.getElementById('section3').style.display = '';

	/* Show section4 */
	document.getElementById('section4').style.display = '';

	/* Show section5 */
	document.getElementById('section5').style.display = '';
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

	}, 1000);

}