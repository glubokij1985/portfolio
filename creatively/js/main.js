jQuery(function(){
//======================= CAROUSEL-HEAD ===========================                                   
	jQuery('.carousel-head').flexslider({
	    animation: "slide",
	    slideshowSpeed: 5000,
	    pauseOnAction: true,
	    pauseOnHover: true,
  	});
//======================= CAROUSEL SECOND =========================== 
  	jQuery('.carousel-monitor').flexslider({
	    animation: "fade",
	    slideshowSpeed: 5000,
	    pauseOnAction: true,
	    pauseOnHover: true,
  	});
//======================= BURGER-BUTTON =========================== 
  	jQuery('.burger-btn-holder').on('click', function(){
		if (!jQuery(this).hasClass('active')){
			jQuery(this).addClass('active');
			jQuery(this).next().stop(true, true).slideDown('normal');
		} else {
			jQuery(this).removeClass('active');
			jQuery(this).next().stop(true, true).slideUp('normal');
		}
	});
//======================= GO-TO-TOP =========================== 
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 0) {
            jQuery('.flex-go-to-top').fadeIn();
        } else {
            jQuery('.flex-go-to-top').fadeOut();
        }
    });
    jQuery('.flex-go-to-top').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});