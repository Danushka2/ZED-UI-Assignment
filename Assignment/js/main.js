setOverlayHeight();


$(document).on('ready', function () {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $("#nav").css("background", "#29323c");
    }
    else {
      $("#nav").css("background", "transparent");
    }
  })
})



function setOverlayHeight() {
  bodyHeight = $(window).height();
  bodyHeight = Number(bodyHeight);
  document.getElementById("overlay").style.height = bodyHeight + "px";
  console.log("setting height to:" + bodyHeight + "px");

  $("#nav-btn").click(
    function () {
      $("#overlay").toggle();
    }
  );
}