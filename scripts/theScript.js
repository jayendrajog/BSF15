window.onload = function(){
	window.addEventListener('scroll', function(e)
	{
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 350,
            navbar = document.querySelector(".navbar"),
            header = document.querySelector(".navbar-left"),
            header2 = document.querySelector(".navbar-right");
        if(distanceY > shrinkOn - 100 && distanceY <= shrinkOn)
        {
        	$('.navbar').css('background-color', 'rgba(0, 0, 0, 1)');
        }
        else if(distanceY < shrinkOn)
        {
        	$('.navbar').css('background-color', 'rgba(0, 0, 0, 0)');
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
