window.onload = function(){
	var NAV_SCROLL_MAX = 450;
	window.addEventListener('scroll', function(e)
	{
        var width = window.outerWidth;
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 600,
            navbar = document.querySelector(".navbar"),
            header = document.querySelector(".navbar-left"),
            header2 = document.querySelector(".navbar-right");  
        if((distanceY > NAV_SCROLL_MAX && distanceY <= shrinkOn) || width < 993)
        {
        	$('.navbar').css('background-color', 'rgba(0, 0, 0, 1)');
        }
        else if(distanceY < NAV_SCROLL_MAX)
        {
            var shading = distanceY/NAV_SCROLL_MAX;
        	$('.navbar').css('background-color', 'rgba(0, 0, 0,' + shading +')');
        }
        if (distanceY > shrinkOn) {
        	$('.navbar').css('background-color', 'rgba(0, 0, 0, 1)');
        	// classie.add(navbar,"smaller");
         //    classie.add(header,"smaller");
         //    classie.add(header2, "smaller");
        } 
        else {
            if (classie.has(header,"smaller")) {
            	$('.navbar').css('background-color', 'rgba(0, 0, 0, 1)');
            	// classie.remove(navbar,"smaller");
             //    classie.remove(header,"smaller");
             //    classie.remove(header2,"smaller");
            }
        }
    });
};

var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});