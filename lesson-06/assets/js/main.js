$(document).ready(function(){

  var alert = "<div class='alert no-dice'><h5>No Dice!</h5><p>We're not open yet. You just need to deal.</p></div>"

  $('input[type="submit"]').click(function(){
    $('form').append(alert);
    return false;
  });

});