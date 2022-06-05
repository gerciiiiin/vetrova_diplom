$(function(){

	$('.btn_menu').on('click', function(){
    	$('.menu ul').slideToggle();
	});

	// Слайдер
	$('.slider_inner').slick({
		infinite: true,
		slidesToShow: 3,
    	slidesToScroll: 1,
		variableWidth: true,
		lazyLoad: 'ondemand',
		prevArrow: '<button type="button" class="slick-prev slick-btn"><span class="icon-caret-left icon"></span></button>',
		nextArrow: '<button type="button" class="slick-next slick-btn"><span class="icon-caret-right icon"></span></button>'
	});



});