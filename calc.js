'use strict';
$(document).ready(function(){

  var currentValue = '3';
  var newValue = ' ';
  var $display = $("#display");
  $display.text(currentValue);
  var $valueOnScreen = $("#display").text();
  console.log('$valueOnScreen is: '+$valueOnScreen);



  $("#clear").on('click', function() {
    $display.text('0');
  });

  var $id = $(".num");

  $("#1").on('click' || 'keydown', function() {
    $display.text('1');
  });

  $("#2").on('click', function() {
    $display.text('2');
  });

  $("#3").on('click', function() {
    $display.text('3');
  });

  $("#4").on('click', function() {
    $display.text('4');
  });

  $("#5").on('click', function() {
    $display.text('5');
  });

  $("#6").on('click', function() {
    $display.text('6');
  });

  $("#7").on('click', function() {
    $display.text('7');
  });

  $("#8").on('click', function() {
    $display.text('8');
  });

  $("#9").on('click', function() {
    $display.text('9');
  });

  $("#0").on('click', function() {
    $display.text('0');
  });


  // OPERATIONS

  var adds = function(str) {
    var sum = parseInt(str) + parseInt(currentValue);
    console.log('adds ran to get:'+sum);
    return sum;
  }

  //OPERATORS
  var checksForInput = function() {
      console.log("Checking for $display input:"+$display.text());
      return $display.text();
  }

  $("#adds").on('click', function() {
    if (checksForInput()) {
      //console.log('input returned.');
      var toAdd = $display.text();
      }
      var sum = adds(toAdd);
    });

    $("#equals").on('click', function() {

      //var sum = adds(toAdd);
      $display.text(newValue);
    })
  });

  //TO DO:
  //-make values add and return, display.

  //-add keyevent capability or keyboard functionality

  //store values until equals is triggers.

  //if decimal key is picked, enter 0 on display. (use parseFloat?)
  //divides is divide by 100.
  // decimals is

  //Limit event Listeners by class.
  //$(".num").on('click', function(event)){
  //  use the event that is passed here.
  //  identify button by data-id.
  //}

  //separate binary operators from things like decimal, negative trigger, percent.

  // MAKE SWITCH FOR OPERATORS ONLY
  // switch ($id) {
  //   case 0:
  //     $("#id") === 1;
  //     $display.text('1');
  //     console.log('1');
  //     break;
  //   case 2:
  //     $("#id") === 2;
  //     $display.text('2');
  //     console.log('2');
  //     break;
  // }
