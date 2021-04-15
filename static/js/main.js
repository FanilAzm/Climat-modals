$(document).ready(function(){

	$('#gas').click(function(){
		$('.gas-content').toggleClass('active');
	});
	if(document.documentElement.clientWidth < 425) {
		$('#gas').click(function(){
			$(this).closest('.popup__content').toggleClass('bigheight');
		});
	}

	// Загрузка файлов по input

	$('.download-file').on('change', function(){
		const fileName = $('.download-file__name');
		if(this.files && this.files.length > 1) {
			fileName.text(this.files.length + ' файлов выбрано');
		} else {
			fileName.text(this.files[0].name);
		}
	});

	// Слайдер

	const boilerSlider = $('.boiler-slider').slick({
		infinite: false,
		arrows: true,
		prevArrow: '.boiler-slider__prev',
		nextArrow: '.boiler-slider__next',
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	const airSlider = $('.air-conditioning-slider').slick({
		infinite: false,
		arrows: true,
		prevArrow: '.air-conditioning-slider__prev',
		nextArrow: '.air-conditioning-slider__next',
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	const ventilationSlider = $('.ventilation-slider').slick({
		infinite: false,
		arrows: true,
		prevArrow: '.ventilation-slider__prev',
		nextArrow: '.ventilation-slider__next',
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$(".popup-slider").on('afterChange', function(event, slick, currentSlide){
		$(".cp").text(currentSlide + 1);
 	});

  // Модальное окно

  function openModal(btn, selector) {
    $(btn).click(function(){
			setTimeout(() => boilerSlider.slick('refresh'));
			setTimeout(() => airSlider.slick('refresh'));
			setTimeout(() => ventilationSlider.slick('refresh'));
    });
  
    $(btn).click(function(e){
      e.preventDefault();
      $(selector).addClass('active');
      $('body').addClass('popup-open');
    });
    $('.popup-close').click(function(){
      $(selector).removeClass('active');
      $('body').removeClass('popup-open');
		});
  }

	openModal('.boiler', '.boiler-popup');
	openModal('.air-conditioning', '.air-conditioning-popup');
	openModal('.ventilation', '.ventilation-popup');

	$(document).mouseup(function(e){
		if ($('.popup').has(e.target).length === 0){
			$('.popup').removeClass('active');
			$('body').removeClass('popup-open');
		}
	});
	
});

