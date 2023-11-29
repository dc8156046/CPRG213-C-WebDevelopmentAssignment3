/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// Initialize variables
let costPerDay = 35; // Default daily rate
let dayCounter = 0; // Number of selected days

// Get references to relevant HTML elements
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const calculatedCostElement = document.getElementById("calculated-cost");
const daySelectors = document.querySelectorAll(".day-selector li");
const clearButton = document.getElementById("clear-button");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// Add click event listeners to day buttons
daySelectors.forEach(function(day){
    day.addEventListener("click", function() {
      if (!day.classList.contains("clicked")) {
        day.classList.add("clicked");
        dayCounter++;
        // Update the calculated cost
        calculateTotalCost();
      }
    });
  });
  



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// Add click event listener to the "clear-button"
clearButton.addEventListener("click", function() {
    daySelectors.forEach(function(day) {
      if (day.classList.contains("clicked")) {
        day.classList.remove("clicked");
      }
    });
    dayCounter = 0;
    // Reset the calculated cost
    calculateTotalCost();
  });
  




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// Add click event listener to the "half" button
halfButton.addEventListener("click", function() {
    costPerDay = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    // Recalculate the total cost
    calculateTotalCost();
  });
  


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

  // Add click event listener to the "full" button
  fullButton.addEventListener("click", function() {
    costPerDay = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    // Recalculate the total cost
    calculateTotalCost();
  });
  


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
    const totalCost = dayCounter * costPerDay;
    calculatedCostElement.innerHTML = totalCost;
  }