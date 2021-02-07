"use strict";

window.addEventListener("load", start);
document.querySelector("#clear").addEventListener("click", clear);

var mathresults = [];
document.querySelector("#results > p").textContent = mathresults;

function start() {
  console.log("started");
  document.querySelector("#calculate").addEventListener("click", calculate);
}

function calculate() {
  if (document.querySelector("#operator").value == "add") {
    adding();
  } else if (document.querySelector("#operator").value == "sub") {
    substracting();
  } else if (document.querySelector("#operator").value == "mul") {
    multiplying();
  } else if (document.querySelector("#operator").value == "div") {
    dividing();
  }
}

function adding() {
  var firstnumber = Number(document.querySelector("#firstnumber").value);
  var secondnumber = Number(document.querySelector("#secondnumber").value);
  console.log("adding " + firstnumber + " + " + secondnumber);
  var calculation = firstnumber + secondnumber + "<br>";
  mathresults.push(calculation);
  var mathresultsnocomma = mathresults.join(" ");
  document.querySelector("#results > p").innerHTML = mathresultsnocomma;
  scrollToBottom();
}

function substracting() {
  var firstnumber = Number(document.querySelector("#firstnumber").value);
  var secondnumber = Number(document.querySelector("#secondnumber").value);
  var calculation = firstnumber - secondnumber + "<br>";
  mathresults.push(calculation);
  var mathresultsnocomma = mathresults.join(" ");
  document.querySelector("#results > p").innerHTML = mathresultsnocomma;
  scrollToBottom();

}

function multiplying() {
  var firstnumber = Number(document.querySelector("#firstnumber").value);
  var secondnumber = Number(document.querySelector("#secondnumber").value);
  var calculation = firstnumber * secondnumber + "<br>";
  mathresults.push(calculation);
  var mathresultsnocomma = mathresults.join(" ");
  document.querySelector("#results > p").innerHTML = mathresultsnocomma;
  scrollToBottom();

}

function dividing() {
  var firstnumber = Number(document.querySelector("#firstnumber").value);
  var secondnumber = Number(document.querySelector("#secondnumber").value);
  var calculation = firstnumber / secondnumber + "<br>";
  mathresults.push(calculation);
  var mathresultsnocomma = mathresults.join(" ");
  document.querySelector("#results > p").innerHTML = mathresultsnocomma;
  scrollToBottom();

}

function clear() {
  mathresults = [];
  document.querySelector("#results > p").innerHTML = "";
}

// Taken from: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

function scrollToBottom() {
  var div = document.querySelector("#results > p");
  div.scrollIntoView(false);
}
