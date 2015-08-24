 $("#menu-toggle").click(function(e) {
   e.preventDefault();
   $("#wrapper").toggleClass("toggled");
 });
var $toTop = $('.toTop');
$(window).scroll(function () {
    if ($(this).scrollTop() > 2) {
        $toTop.fadeIn("slow");
    } else {             
       $toTop.fadeOut("slow");
    }
});