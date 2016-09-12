var main = function(){
  console.log("Im here");
  var defaultValue = 20;
  var playerOneValue = 20;
  var playerTwoValue = 20;
  $('.player-one .counter .value').text(playerOneValue);
  $('.player-one .counter .buttons .increase').click(function(){
    playerOneValue = playerOneValue + 1;
    $('.player-one .counter .value').text(playerOneValue);
  });
  $('.player-one .counter .buttons .decrease').click(function(){
    playerOneValue = playerOneValue - 1 ;
    $('.player-one .counter .value').text(playerOneValue);
  });


  $('.player-two .counter .value').text(playerTwoValue);
  $('.player-two .counter .buttons .increase').click(function(){
    playerTwoValue = playerTwoValue + 1;
    $('.player-two .counter .value').text(playerTwoValue);
  });
  $('.player-two .counter .buttons .decrease').click(function(){
    playerTwoValue = playerTwoValue - 1 ;
    $('.player-two .counter .value').text(playerTwoValue);
  });


  $('.reset').click(function(){
    playerOneValue = defaultValue;
    playerTwoValue = defaultValue;
    $('.player-one .counter .value').text(playerOneValue);
    $('.player-two .counter .value').text(playerTwoValue);
  });
};

$(document).ready(main);
