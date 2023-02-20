//typing text animation script
var typed = new Typed(".typing_text", {
    strings: ["Jon Ian.", "a Web Developer.", "a Virtual Assistant.", "a Mechanical Engineer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    cursorChar: '|',
});

$(document).ready(function () {
  
    $("#project-1").on("click", function () {
      $(".content-item-2").hide();
      $(".content-item-2-2").hide();
      $(".content-item-2-1").show();
      $(".content-item-2-3").hide();
      $(".content-item-2-4").hide();
    })

    $("#project-2").on("click", function () {
        $(".content-item-2").hide();
        $(".content-item-2-1").hide();
        $(".content-item-2-2").show();
        $(".content-item-2-3").hide();
        $(".content-item-2-4").hide();
    })

    $("#project-3").on("click", function () {
        $(".content-item-2").hide();
        $(".content-item-2-1").hide();
        $(".content-item-2-2").hide();
        $(".content-item-2-3").show();
        $(".content-item-2-4").hide();
    })

    $("#project-4").on("click", function () {
        $(".content-item-2").hide();
        $(".content-item-2-1").hide();
        $(".content-item-2-2").hide();
        $(".content-item-2-3").hide();
        $(".content-item-2-4").show();
    })

});