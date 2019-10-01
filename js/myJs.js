
 $("document").ready(function () {


      var offset = $('nav').offset().top;
     // alert(offset);


    $(window).scroll(function () {
        var scrollValue = $(window).scrollTop();
        $('nav').wrap('<div class="nav-placeholder"> </div>');
        $(".nav-placeholder").height($('nav').outerHeight());

        if (scrollValue >= offset) {
            $("nav").addClass("navAnimate");

        } else {
            $("nav").removeClass("navAnimate");
            //plase take navAnimate css class for plug i
            //
        }
    });




     $(".box").animate({
         "height": "350"
     }, 1500);

     $(".boxTwo").animate({
         "height": "250"
     }, 2000);
     $(".greeting").fadeIn(1500);

 })

 // Landing page slider

 $(document).ready(function() {

     var $slider = $(".slider"),
         $slideBGs = $(".slide__bg"),
         diff = 0,
         curSlide = 0,
         numOfSlides = $(".slide").length-1,
         animating = false,
         animTime = 500,
         autoSlideTimeout,
         autoSlideDelay = 6000,
         $pagination = $(".slider-pagi");

     function createBullets() {
         for (var i = 0; i < numOfSlides+1; i++) {
             var $li = $("<li class='slider-pagi__elem'></li>");
             $li.addClass("slider-pagi__elem-"+i).data("page", i);
             if (!i) $li.addClass("active");
             $pagination.append($li);
         }
     };

     createBullets();

     function manageControls() {
         $(".slider-control").removeClass("inactive");
         if (!curSlide) $(".slider-control.left").addClass("inactive");
         if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
     };

     function autoSlide() {
         autoSlideTimeout = setTimeout(function() {
             curSlide++;
             if (curSlide > numOfSlides) curSlide = 0;
             changeSlides();
         }, autoSlideDelay);
     };

     autoSlide();

     function changeSlides(instant) {
         if (!instant) {
             animating = true;
             manageControls();
             $slider.addClass("animating");
             $slider.css("top");
             $(".slide").removeClass("active");
             $(".slide-"+curSlide).addClass("active");
             setTimeout(function() {
                 $slider.removeClass("animating");
                 animating = false;
             }, animTime);
         }
         window.clearTimeout(autoSlideTimeout);
         $(".slider-pagi__elem").removeClass("active");
         $(".slider-pagi__elem-"+curSlide).addClass("active");
         $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
         $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
         diff = 0;
         autoSlide();
     }

     function navigateLeft() {
         if (animating) return;
         if (curSlide > 0) curSlide--;
         changeSlides();
     }

     function navigateRight() {
         if (animating) return;
         if (curSlide < numOfSlides) curSlide++;
         changeSlides();
     }

     $(document).on("mousedown touchstart", ".slider", function(e) {
         if (animating) return;
         window.clearTimeout(autoSlideTimeout);
         var startX = e.pageX || e.originalEvent.touches[0].pageX,
             winW = $(window).width();
         diff = 0;

         $(document).on("mousemove touchmove", function(e) {
             var x = e.pageX || e.originalEvent.touches[0].pageX;
             diff = (startX - x) / winW * 70;
             if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
             $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
             $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
         });
     });

     $(document).on("mouseup touchend", function(e) {
         $(document).off("mousemove touchmove");
         if (animating) return;
         if (!diff) {
             changeSlides(true);
             return;
         }
         if (diff > -8 && diff < 8) {
             changeSlides();
             return;
         }
         if (diff <= -8) {
             navigateLeft();
         }
         if (diff >= 8) {
             navigateRight();
         }
     });

     $(document).on("click", ".slider-control", function() {
         if ($(this).hasClass("left")) {
             navigateLeft();
         } else {
             navigateRight();
         }
     });

     $(document).on("click", ".slider-pagi__elem", function() {
         curSlide = $(this).data("page");
         changeSlides();
     });

 });


 // -------------------

 $(function() {

     var watchScroll =0;
     var rightComments = $('.r-event .event-body');
     var leftComments = $('.l-event .event-body');
     TweenMax.staggerFrom(rightComments, 1, {x: 100, ease:Bounce.easeOut},1);
     TweenMax.staggerFrom(leftComments, 1, {x: -100,ease:Bounce.easeOut},1);

     $(window).on('scroll', function() {
         var scrollTop = $(window).scrollTop();
         (scrollTop > watchScroll)?
             $('footer').addClass('footer-up'):
             $('footer').removeClass('footer-up');

         watchScroll = scrollTop;
     })
 });

 //Script code for countdown
 const second = 1000,
     minute = second * 60,
     hour = minute * 60,
     day = hour * 24;

 let countDown = new Date('Oct 5, 2019 00:00:00').getTime(),
     x = setInterval(function() {

         let now = new Date().getTime(),
             distance = countDown - now;

         document.getElementById('days').innerText = Math.floor(distance / (day)),
             document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
             document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
             document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

         //do something later when date is reached
         //if (distance < 0) {
         //  clearInterval(x);
         //  'IT'S MY BIRTHDAY!;
         //}

     }, second);


