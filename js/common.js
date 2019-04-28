$(function() {
 
	// toggle mnu
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".phone-num").click(function() {
		if ($(".phone2").is(":visible")) {
			$(".phone2").fadeOut(600);
			$(".by_").fadeOut(600);
			$(".phone1").fadeIn(600);
			$(".ru_").fadeIn(600); }
			else {
				$(".phone1").fadeOut(600);
				$(".ru_").fadeOut(600);
				$(".phone2").fadeIn(600);
				$(".by_").fadeIn(600);
				
	}
});

	$(".overlay_wrapper ul a").click(function() {
		$(".overlay_wrapper").fadeOut(600);
		$(".sandwich").toggleClass("active"); });
	$(".toggle_mnu").click(function() {
		if ($(".overlay_wrapper").is(":visible")) {
			$(".overlay_wrapper").fadeOut(600);
		} else {
			$(".overlay_wrapper").fadeIn(600);

		};
	});

	$(".owl-carousel").owlCarousel({

    	items: 1,
    	lazyLoad: true,
			loop: true,
	});

	$(".top-button a").click(function() {
		$(".form").fadeIn(600);
		$(".form").toggleClass("active"); });

		$(".form-container i").click(function() {
		$(".form").fadeOut(600);
	});
		$(".overlay_form").click(function() {
		$(".form").fadeOut(600);
	});
		$(".top-button a").click(function() {
		$(".overlay_form").fadeIn(600);
	});

	$('.ontop').click(function() {
		$('body,html').animate({scrollTop:0},800);
		});



});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");


}); 
