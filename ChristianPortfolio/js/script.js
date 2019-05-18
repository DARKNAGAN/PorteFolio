// Switch Page
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
	$(".navbar a, footer a[href='#accueil']").on('click', function(event) {
	event.preventDefault();
	var hash = this.hash;
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 900, function(){
		window.location.hash = hash;
		});
	});
})