$(document).ready(function(){

  $('input[type="submit"]').click(function(){
    $('.alert').addClass('no-dice');
    return false;
  });

});