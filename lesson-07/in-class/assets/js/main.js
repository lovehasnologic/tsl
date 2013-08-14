$(document).ready(function () {
  /*
   * Use the input[range] event to change
   * the rotation of the box
   */
  $("input[type=range]").change(function () {
    var degrees = $(this).val();
    var rotateStyle = "rotateX(" + degrees + "deg) rotateY(" + degrees + "deg)";

    $(".box ul").css("-webkit-transform", rotateStyle);
  });

  /* 
   * Turn off click action for buttons, 
   * so we can see the translateY in action
   * without having the page jump
   */
  $(".btn").click(function () {
    return false;
  });

  /*
   * Log .box click events
   */
  $(".box a").click(function () {
    console.log( $(this).attr("href") );
  })

});