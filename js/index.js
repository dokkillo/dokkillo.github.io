 $(document).ready(function() {

   $("#menu-toggle").click(function(e) {
     e.preventDefault();
     $("#wrapper").toggleClass("toggled");
   });
   var $toTop = $('.toTop');
   $(window).scroll(function() {
     if ($(this).scrollTop() > 200) {
       $toTop.fadeIn("slow");
     } else {
       $toTop.fadeOut("slow");
     }
   });

   $(".ukFlagAboutMe").click(function() {
     $(".spanish").fadeOut(function() { 
       $(".english").fadeIn("slow");
     });
   });
   $(".spainFlagAboutMe").click(function() {  
     $(".english").fadeOut(function  () { 
       $(".spanish").fadeIn("slow");
     });
   });

 });