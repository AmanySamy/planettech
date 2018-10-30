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
});