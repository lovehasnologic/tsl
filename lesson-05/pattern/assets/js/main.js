$(".btn-group a").click(function () {
  // Select the right button
  $(".btn-group a").removeClass("selected");
  $(this).addClass("selected").data("num-clicks", $(this).data("num-clicks") + 1);


  // Log the number of times that this has been clicked
  console.log( $(this).data("num-clicks") );
});

$(".slideshow .next").click(function () {
  $(".slideshow ul").css("left", "-100%");
});