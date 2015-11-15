(function(){

	// Auto focus search bar
	document.forms[0].elements[0].focus();

	// Sticky nav
	var  $window = $(window),
		 $nav = $("nav"),
		 $baseTop = $nav.offset().top;

	$window.scroll(function () {

	    var $top = $window.scrollTop();

	    if ($top >= $baseTop) {
	        $nav.addClass("sticky");
	    } else if ($top < $baseTop) {
	        $nav.removeClass('sticky');
	    }
	});

})();