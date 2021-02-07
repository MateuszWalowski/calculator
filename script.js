"use strict";

window.addEventListener("load", start);
document.querySelector("#clear").addEventListener("click", clear);
document.querySelector("#doround").addEventListener("click", checkbox);
document.querySelector("#decimals").addEventListener("change", checkbox);

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
  checkbox();
}

function substracting() {
  var firstnumber = Number(document.querySelector("#firstnumber").value);
  var secondnumber = Number(document.querySelector("#secondnumber").value);
  var calculation = firstnumber - secondnumber + "<br>";
  mathresults.push(calculation);
  var mathresultsnocomma = mathresults.join(" ");
  document.querySelector("#results > p").innerHTML = mathresultsnocomma;
  scrollToBottom();
  checkbox();
}

function multiplying() {
  var firstnumber = Number(document.querySelector("#firstnumber").value);
  var secondnumber = Number(document.querySelector("#secondnumber").value);
  var calculation = firstnumber * secondnumber + "<br>";
  mathresults.push(calculation);
  var mathresultsnocomma = mathresults.join(" ");
  document.querySelector("#results > p").innerHTML = mathresultsnocomma;
  scrollToBottom();
  checkbox();
}

function dividing() {
  var firstnumber = Number(document.querySelector("#firstnumber").value);
  var secondnumber = Number(document.querySelector("#secondnumber").value);
  var calculation = firstnumber / secondnumber + "<br>";
  mathresults.push(calculation);
  var mathresultsnocomma = mathresults.join(" ");
  document.querySelector("#results > p").innerHTML = mathresultsnocomma;
  scrollToBottom();
  checkbox();
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
  var mathresultstoround = mathresults.slice();

  var x;
  for (x = 0; x < mathresultstoround.length; x++) {
    mathresultstoround[x] = mathresultstoround[x].replace("<br>", "");
  }

  if (document.querySelector("#decimals").value == "0") {
    mathresultsrounded = [];
    var y;
    for (y = 0; y < mathresultstoround.length; y++) {
      mathresultstoround[y] = parseFloat(mathresultstoround[y]).toFixed(0);
      mathresultstoround[y] = mathresultstoround[y] + "<br>";
      mathresultsrounded.push(mathresultstoround[y]);
    }
  } else if (document.querySelector("#decimals").value == "1") {
    mathresultsrounded = [];
    var y;
    for (y = 0; y < mathresultstoround.length; y++) {
      mathresultstoround[y] = parseFloat(mathresultstoround[y]).toFixed(1);
      mathresultstoround[y] = mathresultstoround[y] + "<br>";
      mathresultsrounded.push(mathresultstoround[y]);
    }
  } else if (document.querySelector("#decimals").value == "2") {
    mathresultsrounded = [];
    var y;
    for (y = 0; y < mathresultstoround.length; y++) {
      mathresultstoround[y] = parseFloat(mathresultstoround[y]).toFixed(2);
      mathresultstoround[y] = mathresultstoround[y] + "<br>";
      mathresultsrounded.push(mathresultstoround[y]);
    }
  } else if (document.querySelector("#decimals").value == "3") {
    mathresultsrounded = [];
    var y;
    for (y = 0; y < mathresultstoround.length; y++) {
      mathresultstoround[y] = parseFloat(mathresultstoround[y]).toFixed(3);
      mathresultstoround[y] = mathresultstoround[y] + "<br>";
      mathresultsrounded.push(mathresultstoround[y]);
    }
  } else if (document.querySelector("#decimals").value == "4") {
    mathresultsrounded = [];
    var y;
    for (y = 0; y < mathresultstoround.length; y++) {
      mathresultstoround[y] = parseFloat(mathresultstoround[y]).toFixed(4);
      mathresultstoround[y] = mathresultstoround[y] + "<br>";
      mathresultsrounded.push(mathresultstoround[y]);
    }
  } else if (document.querySelector("#decimals").value == "5") {
    mathresultsrounded = [];
    var y;
    for (y = 0; y < mathresultstoround.length; y++) {
      mathresultstoround[y] = parseFloat(mathresultstoround[y]).toFixed(5);
      mathresultstoround[y] = mathresultstoround[y] + "<br>";
      mathresultsrounded.push(mathresultstoround[y]);
    }
  } else if (document.querySelector("#decimals").value == "6") {
    mathresultsrounded = [];
    var y;
    for (y = 0; y < mathresultstoround.length; y++) {
      mathresultstoround[y] = parseFloat(mathresultstoround[y]).toFixed(6);
      mathresultstoround[y] = mathresultstoround[y] + "<br>";
      mathresultsrounded.push(mathresultstoround[y]);
    }
  } else if (document.querySelector("#decimals").value == "7") {
    mathresultsrounded = [];
    var y;
    for (y = 0; y < mathresultstoround.length; y++) {
      mathresultstoround[y] = parseFloat(mathresultstoround[y]).toFixed(7);
      mathresultstoround[y] = mathresultstoround[y] + "<br>";
      mathresultsrounded.push(mathresultstoround[y]);
    }
  } else if (document.querySelector("#decimals").value == "8") {
    mathresultsrounded = [];
    var y;
    for (y = 0; y < mathresultstoround.length; y++) {
      mathresultstoround[y] = parseFloat(mathresultstoround[y]).toFixed(8);
      mathresultstoround[y] = mathresultstoround[y] + "<br>";
      mathresultsrounded.push(mathresultstoround[y]);
    }
  }
  console.log(mathresultsrounded);
  var mathresultsroundednocomma = mathresultsrounded.join(" ");
  document.querySelector("#results > p").innerHTML = mathresultsroundednocomma;
  scrollToBottom();
}
