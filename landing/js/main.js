$(function(){
//======================= POP-UP ===========================
	$(document).on('click', '.phone .callback', function(){
		var $this = $(this);                     
		if(!$this.hasClass('active')){ 
			$this.addClass('active');              
			$this.next().show(200);            
		} else {                                   
			$this.removeClass('active');
			$this.next().hide(200);
		}
	});
	$(document).on('click', '.phone .callback div', function(){
		var $this = $(this);
		$this.parent().next().hide(200);
		$this.parent().removeClass('.active');
	});
	$(document).on('click', '.phone .popup .btn-close', function(){
		var $this = $(this);
		var popupHolder = $('.popup-holder');
		var callbackBtn = $('.phone .callback');
		popupHolder.hide(200);
		callbackBtn.removeClass('active');
		$this.parent().next().hide(200);
	});
//======================= HOVER ON FACE =========================== 
	$('.photos ul li .img-holder').on('mouseenter', function(){
		var $this = $(this);
		$this.addClass('hovered');
	});
	$('.photos ul li .img-holder').on('mouseleave', function(){
		var $this = $(this);
		$this.removeClass('hovered');
	});
	//======================= CAROUSEL =========================== 
	$('.carousel').flexslider({
	    animation: "slide",
	    slideshowSpeed: 3000,
	    pauseOnAction: true,
	    pauseOnHover: true
  	});
});