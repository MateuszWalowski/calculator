"use strict";

window.addEventListener("load", start);

var mathresults = [];
document.querySelector("#results > p").textContent = mathresults;

function start() {
  console.log("started");
  document.querySelector("#calculate").addEventListener("click", calculate);
}

function calculate() {
  var firstnumber = Number(document.querySelector("#firstnumber").value);
  var secondnumber = Number(document.querySelector("#secondnumber").value);
  console.log("adding " + firstnumber + " + " + secondnumber);
  var calculation = firstnumber + secondnumber + "<br>";
  mathresults.push(calculation);
  var mathresultsnocomma = mathresults.join(" ");
  document.querySelector("#results > p").innerHTML = mathresultsnocomma;
}
