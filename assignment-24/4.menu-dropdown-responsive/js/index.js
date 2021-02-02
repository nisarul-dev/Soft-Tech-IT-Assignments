// javaScript and jQuery Code gose here

jQuery("nav i").click(function() {
    jQuery("nav .container> ul").slideToggle();
})

if ( jQuery(window).width() > 768 ) {
    jQuery("nav ul li").hover(function(){
        jQuery(this).children("ul").stop().slideToggle();
    });
} else {
    jQuery("nav ul li").click(function(){
        jQuery(this).children("ul").slideToggle();
    });
}

jQuery("nav ul li ul").parent("li").children("a").append(' <i class="fas fa-angle-down"></i>');