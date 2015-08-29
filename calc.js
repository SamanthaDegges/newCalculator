'use strict';
$(document).ready(function(){

  var currentValue = '0';
  var newValue = ' ';
  var $display = $("#display");
  $display.text(currentValue);
  var $valueOnScreen = $("#display").text();
  console.log('$valueOnScreen is: '+$valueOnScreen);


  $("#clear").on('click', function() {
    currentValue = '0';
    $display.text(currentValue);
    console.log('currentValue is: '+currentValue);
    newValue = ' ';
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
  var checksForInput = function() {
      console.log("Checking for $display input:"+$display.text());
      return $display.text();
  }
  var adds = function(str) {
    var sum = parseInt(str) + parseInt(currentValue);
    console.log('adds ran to get:'+sum);
    return sum;
  }
  var subtracts = function(str) {
    var difference = parseInt(str) - parseInt(currentValue);
    console.log('subtracts ran to get:'+difference);
    return difference;
  }
  var multiplys = function(str) {
    var product = parseInt(str) * parseInt(currentValue);
    console.log('multiplys ran to get:'+product);
    return product;
  }
  var divides = function(str) {
    var quotient = parseInt(str) - parseInt(currentValue);
    console.log('subtracts ran to get:'+difference);
    return quotient;
  }

  //OPERATOR EVENT HANDLERS
  $("#adds").on('click', function() {
    if (checksForInput()) {
      currentValue = checksForInput();
      console.log("input returned: "+ currentValue);
      var toAdd = $display.text();
      }
      var sum = adds(toAdd);
      return currentValue = sum;
      //$display.text(currentValue);
    });

  $("#subtracts").on('click', function() {
    if (checksForInput()) {
      currentValue = checksForInput()
      var toSubtract = $display.text();
      }
      var difference = subtracts(toSubtract);
      return currentValue = difference;
    });

  $("#divides").on('click', function() {
    if (checksForInput()) {
      currentValue = checksForInput()
      //console.log('input returned.');
      var toDivide = $display.text();
      }
      var quotient = divides(toDivide);
      return currentValue = quotient;
    });

  $("#multiplys").on('click', function() {
    if (checksForInput()) {
      currentValue = checksForInput()
      //console.log('input returned.');
      var toMultiply = $display.text();
      }
      var product = multiplys(toMultiply);
      return currentValue = product;
    });

  $("#equals").on('click', function() {
    newValue = currentValue;
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
