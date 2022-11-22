
$(function () {
	////////////*"Burger" button*////////////

	$('.burger__menu').click(function () {
		$('.burger__menu,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	////////////*"Scroll down" button / Smooth Scrolling*////////////

	$(".scroll-down").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 800);
		return false;
	});

	////////////*Pop Up_"Call Now" button*////////////

	$('a.call-btn').click(function (event) {
		event.preventDefault();
		$('#myOverlay').fadeIn(297, function () {
			$('#myModal')
				.css('display', 'block')
				.animate({ opacity: 1 }, 198);
		});
	});

	$('#myModal__close, #myOverlay').click(function () {
		$('#myModal').animate({ opacity: 0 }, 198, function () {
			$(this).css('display', 'none');
			$('#myOverlay').fadeOut(297);
		});
	});

	////////////*button "See More"*////////////

	$('.more__button').click(function (e) {
		e.preventDefault();
		$('.hidden-p').toggleClass('p-visible');
	});

	// var newElems = $("<div class='dcell'></div>")
	//        .append("<img src='http://professorweb.ru/downloads/jquery/lily.png'/>")
	//        .append("<label for='lily'>Лилии:</label>")
	//        .append("<input name='lily' value='0' required />");

	//    newElems.css("border", "thick solid red");

	//    $('#row1').append(newElems);


});


