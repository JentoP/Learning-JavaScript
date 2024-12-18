// Get elements from the DOM
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const buttonElement = document.getElementById("button");
const inputElement = document.getElementById("input");
const welcomeElement = document.getElementById("welcome");
const listElement = document.getElementById("list");

// Set the inner text of the title element
titleElement.innerText = "Hallo";

// Set the background color of the title element to red
titleElement.style.backgroundColor = "red";

// Initialize variables
let titleColorIsRed = true;
let inputText = "";

// Set the source of the image element
imageElement.src = "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg";

// Function to get items from localStorage
const getItemsInStorage = () => {
  const itemsString = localStorage.getItem("items") ?? ""; // Get items from localStorage or return an empty string
  const items = itemsString.split(",").filter((item) => item != ""); // Split the string into an array and filter out empty strings

  console.log(items); // Log the items for debugging

  return items;
};

// Function to add an item to the list in the DOM
const addItemToListInDOM = (item) => {
  const listItem = document.createElement("li"); // Create a new list item element
  const textForItem = document.createElement("h1"); // Create a new h1 element for the text
  textForItem.innerText = item; // Set the text of the h1 element
  listItem.appendChild(textForItem); // Append the h1 element to the list item
  listElement.appendChild(listItem); // Append the list item to the list element
};

// Function to handle adding items to the list
const onAddItemInList = () => {
  if (inputText.trim() === "") {
    return; // If the input text is empty, do nothing
  }

  const prevItems = getItemsInStorage(); // Get previous items from localStorage
  const newItems = [...prevItems, inputText]; // Add the new input text to the array of previous items
  const newItemsString = newItems.join(","); // Join the items into a single string

  localStorage.setItem("items", newItemsString); // Save the new items string to localStorage

  addItemToListInDOM(inputText); // Add the new item to the list in the DOM

  inputText = ""; // Reset the input text
  inputElement.value = ""; // Clear the input field
};

// Add click event listener to the button element
buttonElement.addEventListener("click", onAddItemInList);

// Add click event listener to the title element to toggle background color
titleElement.addEventListener("click", () => {
  titleColorIsRed = !titleColorIsRed; // Toggle the boolean value

  // Toggle background color between red and blue
  titleElement.style.backgroundColor = titleColorIsRed ? "red" : "blue";
});

// Add input event listener to the input element to update inputText
inputElement.addEventListener("input", (event) => {
  inputText = event.target.value; // Update the inputText variable with the current input value
});

// Function to retrieve all items from localStorage and set them in the DOM
const setAllItemsFormStorage = () => {
  const items = getItemsInStorage(); // Get all items from localStorage
  items.forEach((item) => addItemToListInDOM(item)); // Add each item to the DOM
};

// Call the function to set all items from localStorage when the script runs
setAllItemsFormStorage();
