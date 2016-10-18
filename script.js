"use strict";
/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var enterStop = document.querySelector("#stopLight");
enterStop.addEventListener("mouseover", function() {
  console.log("Entered Stop button");
});

var leaveStop = document.querySelector("#stopLight");
leaveStop.addEventListener("mouseout", function() {
  console.log("Left Stop button");
});

var clickStop = document.querySelector("#stopLight");
clickStop.addEventListener("click", function() {
   clickStop.style.backgroundColor = "red";
});

var enterSlow = document.querySelector("#slowLight");
enterSlow.addEventListener("mouseover", function() {
  console.log("Entered Slow button");
});

var leaveSlow = document.querySelector("#slowLight");
leaveSlow.addEventListener("mouseout", function() {
  console.log("Left Slow button");
});

var clickSlow = document.querySelector("#slowLight");
clickSlow.addEventListener("click", function() {
   clickSlow.style.backgroundColor = "orange";
});

var enterGo = document.querySelector("#goLight");
enterGo.addEventListener("mouseover", function() {
  console.log("Entered Go button");
});

var leaveGo = document.querySelector("#goLight");
leaveGo.addEventListener("mouseout", function() {
  console.log("Left Go button");
});

var clickGo = document.querySelector("#goLight");
clickGo.addEventListener("click", function() {
   clickGo.style.backgroundColor = "green";
});

// var logText = document.getElementById("#traffic-light");
// logText.addEventListener("click", function() {
//   logText.
// });
