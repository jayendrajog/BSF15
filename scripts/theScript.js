window.onload = function(){
	var NAV_SCROLL_MAX = 450;
	window.addEventListener('scroll', function(e)
	{
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 600,
            navbar = document.querySelector(".navbar"),
            header = document.querySelector(".navbar-left"),
            header2 = document.querySelector(".navbar-right");
        var shading = distanceY/NAV_SCROLL_MAX;
        if(distanceY > NAV_SCROLL_MAX && distanceY <= shrinkOn)
        {
        	$('.navbar').css('background-color', 'rgba(0, 0, 0, 1)');
        }
        else if(distanceY < NAV_SCROLL_MAX)
        {
        	$('.navbar').css('background-color', 'rgba(0, 0, 0,' + shading +')');
        }
        if (distanceY > shrinkOn) {
        	$('.navbar').css('background-color', 'rgba(0, 0, 0, 1)');
        	classie.add(navbar,"smaller");
            classie.add(header,"smaller");
            classie.add(header2, "smaller");
        } 
        else {
            if (classie.has(header,"smaller")) {
            	$('.navbar').css('background-color', 'rgba(0, 0, 0, 1)');
            	classie.remove(navbar,"smaller");
                classie.remove(header,"smaller");
                classie.remove(header2,"smaller");
            }
        }
    });
}

var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$(document).ready(function()
{
	$('.navbar-left li a').click(function(e){
		alert(lol);
		var $this = $(this);
	 	if (!$this.hasClass('active')) {
	    $this.addClass('active');
	  	}
	 	e.preventDefault();
	});
});