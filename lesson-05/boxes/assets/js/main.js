$(".red").click(function () {
  $(this).fadeOut();
  // Try fadeIn and fadeToggle
});

$(".orange").click(function () {
  $(this).slideUp(2000);
  // Try slideDown and slideToggle
});

$(".yellow").click(function () {
  $(this).animate({"opacity": 0}, 1000, function (){
    console.log("I'm done animating.");
  });
});

