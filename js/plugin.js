$(document).ready(function() {


    $(document).scroll(function() {
        if ($(document).scrollTop() > 120) {
            $(".navbar .click").addClass("click-bg");
            $(".navbar .click").removeClass("click-style");

        } else {
            $(".navbar .click").removeClass("click-bg");
            $(".navbar .click").addClass("click-style");
        }
    });
    $("#start-btn").on("click", function() {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#new").offset().top - 190 }, 1600);
    });

    // $('#our-team').slick({
    //     centerMode: true,
    //     centerPadding: '60px',
    //     slidesToShow: 3,
    //     autoPlay: true,
    //     responsive: [
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    // });

    $('#our-team-slider .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
      } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });

});

function openNav() {
    var status = document.getElementById("toggle").checked,
        menu = document.getElementById("sideNav"),
        toggleLabel = document.getElementById("toggleLabel"),
        brand = document.getElementById("brand");
    //   body = document.getElementsByTagName("body")[0];

    // body.style.transition = "all .4s ease-in-out";
    menu.style.transition = "all .1s ease-in-out";
    if (!status) {
        menu.style.width = "250px";
        menu.style.opacity = 1;
        menu.style.height = "100%";
        menu.style.borderRaduis = "0";
        toggleLabel.style.right = "270px";
        brand.style.opacity = "0";
        // body.style.marginRight = "250px";
        //  body.style.transform = "translateX(-250px)";
        //   menu.style.transform = "translateX(250px)";

    } else {
        menu.style.width = "0";
        brand.style.opacity = "1";
        toggleLabel.style.right = "20px";
        // body.style.marginRight = "0";
        //  body.style.transform = "translateX(0)";
    }

}