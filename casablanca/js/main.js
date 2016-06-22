$(document).ready(function(){
//======================= BURGER-BUTTON =========================== 
  	$('.burger-btn-holder').on('click', function(){
		if (!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).next().stop(true, true).addClass('active');
		} else {
			$(this).removeClass('active');
			$(this).next().stop(true, true).removeClass('active');
		}
	});
	//======================= PARALLAX =========================== 
	$objWindow = $(window);
	$('div[data-type="background"]').each(function(){
	var $bgObj = $(this);
		$(window).scroll(function() {
		var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
		var coords = '100% '+ yPos + 'px';
			$bgObj.css({ backgroundPosition: coords });
		});
	});

	if($(window).width() > 767){
		//======================= ANIMATED BLOCKS =========================== 
		var h = $(window).height();
		$(window).scroll(function(){
			if ( ($(this).scrollTop()+h) >= $(".works").offset().top) {
				$(".work").css({visibility:"visible"});
				$(".work-1").eq(0).addClass('animated bounceInLeft');
				$(".work-2").eq(0).addClass('animated zoomIn');
				$(".work-3").eq(0).addClass('animated bounceInRight');
				$(".work-4").eq(0).addClass('animated bounceInLeft');
				$(".work-5").eq(0).addClass('animated zoomIn');
				$(".work-6").eq(0).addClass('animated bounceInRight');
			} 
		});
	//======================= ANIMATED BLOCKS 2 =========================== 
		var h = $(window).height();
		$(window).scroll(function(){
			if ( ($(this).scrollTop()+h) >= $(".about-us p").offset().top) {
				$(".about-us ul li").css({visibility:"visible"});
				$(".face-1").eq(0).addClass('animated zoomIn');
				$(".face-2").eq(0).addClass('animated zoomIn');
				$(".face-3").eq(0).addClass('animated zoomIn');
				$(".face-4").eq(0).addClass('animated zoomIn');
			} 
		});
	};
	
//======================= CAROUSEL =========================== 
	$('.flexslider').flexslider({
    	animation: "slide",
    	pauseOnAction: true
  	});
});