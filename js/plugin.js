$(document).ready(function () {
    $("html").niceScroll({
        cursorcolor: "#16cebb",
        cursorwidth: "10px",
        cursorborderradius: "5px",
        zindex: "999999999",
        scrollspeed: 250

    });
    
    $(document).scroll(function () {
        if ($(document).scrollTop() > 120) {
            $(".navbar .click").addClass("click-bg");
            $(".navbar .click").removeClass("click-style");
            
        }
        else {
            $(".navbar .click").removeClass("click-bg");
            $(".navbar .click").addClass("click-style");
                   }
    });
    $("#start-btn").on("click", function () {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#new").offset().top - 190 }, 1600);
    });
    $('#our-team').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoPlay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
});
function openNav() {
  var status = document.getElementById("toggle").checked,
      menu = document.getElementById("sideNav"),
      body = document.getElementsByTagName("body")[0];
      
  body.style.transition = "all .4s ease-in-out";
  menu.style.transition = "all .1s ease-in-out";
  if(!status){
    menu.style.width = "250px";
    menu.style.opacity= 1;
    menu.style.height = "100%";
    menu.style.borderRaduis = "0";
    // body.style.marginRight = "250px";
    body.style.transform = "translateX(-250px)";
    menu.style.transform = "translateX(250px)";
    
  }else{
    menu.style.width = "0";
    // body.style.marginRight = "0";
    body.style.transform = "translateX(0)";
  }
  
}