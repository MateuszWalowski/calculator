"use strict";

window.addEventListener("load", start);
document.querySelector("#clear").addEventListener("click", clear);
document.querySelector("#doround").addEventListener("click", checkbox);

var mathresults = [];
var mathresultsrounded = [];
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

function checkbox() {
  if (document.querySelector("#doround").checked) {
    console.log("checked");
    rounding();
  } else {
    console.log("unchecked");
    document.querySelector("#results > p").innerHTML = mathresults;

    var mathresultsnocomma = mathresults.join(" ");
    document.querySelector("#results > p").innerHTML = mathresultsnocomma;
    scrollToBottom();
  }
}

function rounding() {
  const mathresultstoround = mathresults.slice();

  var x;
  for (x = 0; x < mathresultstoround.length; x++) {
    mathresultstoround[x] = mathresultstoround[x].replace("<br>", "");
  }

  var y;
  for (y = 0; y < mathresultstoround.length; y++) {
    mathresultstoround[y] = parseFloat(mathresultstoround[y]).toFixed(0);
    mathresultstoround[y] = mathresultstoround[y] + "<br>";
    mathresultsrounded.push(mathresultstoround[y]);
  }

  console.log(mathresultsrounded);
  var mathresultsroundednocomma = mathresultsrounded.join(" ");
  document.querySelector("#results > p").innerHTML = mathresultsroundednocomma;
  scrollToBottom();
}
