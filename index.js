// Define the necessary variables
let num1 = "";
let num2 = "";
let operator = "";

// Get the calculator display element
const display = document.getElementById("calculator-display");

// Add event listeners to the number and operator buttons
document.querySelectorAll(".choiceBtn").forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "") {
      num1 += button.textContent;
      display.textContent = num1;
    } else {
      num2 += button.textContent;
      display.textContent = num1 + operator + num2 ;
    }
  });
});

document.querySelectorAll(".choiceOpt").forEach((button) => {
    button.addEventListener("click", () => {
      
       display.textContent = num1 + operator
      if (num1 !== "" && num2 !== "") {

        calculate();
      }
      operator = button.textContent;
    });
  });

  // Add event listener to the equals button
document.getElementById("btn-equals").addEventListener("click", () => {
    calculate();
  });

  // Add event listener to the clear button
document.getElementById("btn-clear").addEventListener("click", () => {
    clear();
  });
  
  // Add event listener to the delete button
  document.getElementById("btn-delete").addEventListener("click", () => {
    if (operator === "") {
      num1 = num1.slice(0, -1);
      display.textContent = num1;
    } else {
      num2 = num2.slice(0, -1);
      display.textContent.slice(-1)
      if(display.textContent.slice(-1) === operator){
        display.textContent = num1
        operator = ""
      }
      else{
        display.textContent = num1 + operator + num2;
        
      }
      
    }
  });

  
// Define the calculate function
function calculate() {
    const num1Float = parseFloat(num1);
    const num2Float = parseFloat(num2);
    let result;
    switch (operator) {
      case "+":
        result = (num1Float + num2Float);
        break;
      case "-":
        result = (num1Float - num2Float);
        break;
      case "*":
        result = (num1Float * num2Float);
        break;
      case "/":
        result = (num1Float / num2Float);
        break;
      case "%":
        result = (num1Float % num2Float);
        break;
    }
    num1 = result.toString();
    num2 = "";
    operator = "";
    display.textContent = num1;
  }
  
  // Define the clear function
  function clear() {
    num1 = "";
    num2 = "";
    operator = "";
    display.textContent = "";
  }