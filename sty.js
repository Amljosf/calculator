let firstnumber = "";
let secondnumber = "";
let operator = "";
let displayvalue = "";

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) {
    console.log("invalid error");
    return "Error";
  }
  return a / b;
}
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return sum(a, b);
    case "-":
      return sub(a, b);
    case "*":
      return mul(a, b);
    case "/":
      return div(a, b);
    default:
      return "invalid input ";
  }
}

function cleardisplay() {
  displayvalue = "";
  document.getElementById("display").value = displayvalue;
}

function appendvalue(digit) {
  displayvalue += digit;
  document.getElementById("display").value = displayvalue;
}
function chooseOperator(selectedOperator) {
  if (operator !== "" && secondnumber === "") {
    operator = selectedOperator;
    return;
  }
  
  
  else {
    firstnumber = displayvalue;
    operator = selectedOperator;
    displayvalue = "";
  }
}

function calculate() {
 if (firstnumber !== "" && operator !== "" && displayvalue !== "") {
    secondnumber = parseFloat(displayvalue);
    const result = operate(
      operator,
      parseFloat(firstnumber),
      parseFloat(secondnumber)
    );
    displayvalue = result.toString();
    document.getElementById("display").value = displayvalue;
    firstnumber = displayvalue;
    operator = selectedOperator;
    secondnumber = "";
  } 
}

