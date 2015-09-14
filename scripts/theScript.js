window.onload = function(){
	window.addEventListener('scroll', function(e)
	{
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            navbar = document.querySelector(".navbar"),
            header = document.querySelector(".navbar-left"),
            header2 = document.querySelector(".navbar-right");
        if (distanceY > shrinkOn) {
        	classie.add(navbar,"smaller");
            classie.add(header,"smaller");
            classie.add(header2, "smaller");
        } else {
            if (classie.has(header,"smaller")) {
            	classie.remove(navbar,"smaller");
                classie.remove(header,"smaller");
                classie.remove(header2,"smaller");
            }
        }
    });
}

var theoffset = $(".navbar").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > theoffset + 200)
    {   
       $('.navbar').css({"background":"black"});
    } else {
       $('.navbar').css({"background":"transparent"});
    }
});