jQuery(function(){
//======================= POP-UP ===========================                                 
	jQuery('.phone .callback').on('click', function(){
		$this = jQuery(this);                     
		if(!$this.hasClass('active')){ 
			$this.addClass('active');              
			$this.next().slideDown(500);            
		} else {                                   
			$this.removeClass('active');            
			$this.next().slideUp(500);             
		}
	});
	jQuery('.phone .callback div').on('click', function(){
		$this = jQuery(this);
		$this.parent().removeClass('.active');
		$this.parent().next().slideUp(500);
	});
	jQuery('header .header-holder .phone .popup .btn-close').on('click', function(){
		$this = jQuery(this);
		$this.parent().hide();
		$('.phone .callback div').hide();
		$this.parent().next().slideUp(500);
	});
//======================= HOVER ON FACE =========================== 
	jQuery('.main .office .office-holder .photos ul li .img-holder').on('mouseenter', function(){
		$this = jQuery(this);
		$this.addClass('hovered');
		//$this.find('.sub-menu').fadeIn('fast');
		//$this.find('.sub-menu').css({display: 'block'});
	});
	jQuery('.main .office .office-holder .photos ul li .img-holder').on('mouseleave', function(){
		$this = jQuery(this);
		$this.removeClass('hovered');
		//$this.find('.sub-menu').fadeOut('fast');
		//$this.find('.sub-menu').css({display: 'none'});
	});
	//======================= CAROUSEL =========================== 
	jQuery('.carousel').flexslider({
	    animation: "slide",
	    slideshowSpeed: 3000,
	    pauseOnAction: true,
	    pauseOnHover: true
  	});
});