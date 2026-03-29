// Get the display input element
const display = document.getElementById("display");

// Append a value (number or operator) to the display
function appendValue(value) {
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  display.value = "";
}

// Delete the last character from the display
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Evaluate the expression in the display
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error"; // Show error if the expression is invalid
  }
}

/* KEYBOARD SUPPORT */
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // If key is a number (0-9), append it
  if (!isNaN(key)) {
    appendValue(key);
  } 
  // If key is an operator, append it
  else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendValue(key);
  } 
  // If key is a decimal point
  else if (key === ".") {
    appendValue(".");
  } 
  // Enter key calculates the result
  else if (key === "Enter") {
    calculate();
  } 
  // Backspace deletes the last character
  else if (key === "Backspace") {
    deleteLast();
  } 
  // Escape clears the display
  else if (key === "Escape") {
    clearDisplay();
  }
});