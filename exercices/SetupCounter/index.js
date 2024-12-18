const counterElement = document.getElementById("counterText");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");
const counterInput = document.getElementById("input");
const set = document.getElementById("clearButton");
const alert = document.getElementById("alert");
let globalCounter = 0;
let inputText = "";

function setInitialCount() {
    const storedCountString = localStorage.getItem("count") ?? 0;
    const storedCountInt = parseInt(storedCountString);
    globalCounter = storedCountInt;
    setCount(globalCounter);
}

function setCount(count) {
    counterElement.innerText = count;
    saveCount(count);
}

const saveCount = function (count) {
    localStorage.setItem("count", count);
}
plusButton.addEventListener("click", () => {
    setCount(globalCounter++);
})
minusButton.addEventListener("click", () => {
    setCount(globalCounter--);
})
resetButton.addEventListener("click", () => {
    setCount(globalCounter = 0);
})
inputText.addEventListener("input", (event) => {
    inputText = event.target.value;
})
const clearInput = function () {
    inputText = "";
    counterInput.value = "";
    alert.innerText = "";
};
set.addEventListener("click", () => {
    // makes sure it's not empty or NaN (= Not a Number)
    if (inputText === "" || isNaN(inputText)) {
        alert.innerText = "Please enter a number";
        return;
    }
    // makes sure it's an int
    count = parseInt(inputText);
    clearInput();
    setCount(count);
})