$(function(){
//======================= CAROUSEL-HEAD ===========================                                   
	$('.carousel-head').flexslider({
	    animation: "slide",
	    slideshowSpeed: 5000,
	    pauseOnAction: true,
	    pauseOnHover: true,
  	});
//======================= CAROUSEL SECOND =========================== 
  	$('.carousel-monitor').flexslider({
	    animation: "fade",
	    slideshowSpeed: 5000,
	    pauseOnAction: true,
	    pauseOnHover: true,
  	});
//======================= BURGER-BUTTON =========================== 
  	$('.burger-btn-holder').on('click', function(){
		if (!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).next().stop(true, true).slideDown('normal');
		} else {
			$(this).removeClass('active');
			$(this).next().stop(true, true).slideUp('normal');
		}
	});
//======================= GO-TO-TOP =========================== 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.flex-go-to-top').fadeIn();
        } else {
            $('.flex-go-to-top').fadeOut();
        }
    });
    $('.flex-go-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});