// STICKY JS
$(window).scroll(function(){
	var scrolling = $(this).scrollTop();

	if(scrolling > 200){
		$('.navbar').addClass('bg');
	}

	else{
		$('.navbar').removeClass('bg');
	}
});
// STICKY JS

// TYPED JS
$(function(){
	$(".typed").typed({
		strings: ["Welcome to MoGo"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 300,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
// TYPED JS

// COUNTER UP JS
$('.counter').counterUp({
	delay: 30,
	time: 3000,
});
// COUNTER UP JS