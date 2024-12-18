// Get references to the HTML elements by their IDs
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");
const counterText = document.getElementById("counterText");
const counterInput = document.getElementById("input");
const setButton = document.getElementById("formButton");
const alertText = document.getElementById("alertText");

// Initialize the counter variable
let currentCount = 0;

// Initialize the input text variable
let inputText = "";

// Function to update the counter display and save the count to localStorage
const setCount = (count) => {
    counterText.innerText = count; // Update the text content of the counter
    saveCount(count); // Save the updated count to localStorage
};

// Function to save the count to localStorage
const saveCount = (count) => {
    localStorage.setItem("count", count); // Store the count in localStorage
};

// Event listener for the plus button to increment the counter
plusButton.addEventListener("click", () => {
    currentCount++; // Increment the counter
    setCount(currentCount); // Update and save the new counter value
});

// Event listener for the minus button to decrement the counter
minusButton.addEventListener("click", () => {
    currentCount--; // Decrement the counter
    setCount(currentCount); // Update and save the new counter value
});

// Event listener for the reset button to reset the counter to 0
resetButton.addEventListener("click", () => {
    currentCount = 0; // Reset the counter to 0
    setCount(currentCount); // Update and save the new counter value
});

// Event listener for changes in the input field
counterInput.addEventListener("input", (event) => {
    inputText = event.target.value; // Update the inputText with the value from the input field
});

// Function to clear the input field and alert message
const clearInput = () => {
    inputText = ""; // Clear the inputText
    counterInput.value = ""; // Clear the input field
    alertText.innerText = ""; // Clear any alert messages
};

// Event listener for the set button to set the counter to the input value
setButton.addEventListener("click", () => {
    if (inputText === "" || isNaN(inputText)) { // Check if the input is empty or not a number
        alertText.innerText = "Enter a number!"; // Display an alert message
        return;
    }

    currentCount = parseInt(inputText); // Parse the inputText to an integer
    setCount(currentCount); // Update and save the new counter value
    clearInput(); // Clear the input field and alert message
});

// Function to set the initial count from localStorage
const setInitialCount = () => {
    const storedCountString = localStorage.getItem("count") ?? 0; // Retrieve the count from localStorage, default to 0 if not found
    const storedCount = parseInt(storedCountString); // Parse the retrieved count to an integer
    currentCount = storedCount; // Set the currentCount to the retrieved count
    setCount(currentCount); // Update the counter display and save the count
};

// Set the initial count when the script is loaded
setInitialCount();
