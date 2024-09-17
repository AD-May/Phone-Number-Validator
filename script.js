/* Author: Alexander May 
    Last Modified: 9/16/2024 */

const input = document.getElementById("user-input");
const results = document.getElementById("results-div");
const clearButton = document.getElementById("clear-btn");
const checkButton = document.getElementById("check-btn");

const regex1 = /^1?\s([0-9]){3}-([0-9]){3}-([0-9]){4}$/
const regex2 = /^1?\s[(]([0-9]){3}[)]\s([0-9]){3}-([0-9]){4}$/
const regex3 = /^1?[(]([0-9]){3}[)]([0-9]){3}-([0-9]){4}$/
const regex4 = /^1?\s([0-9]){3}\s([0-9]){3}\s([0-9]){4}$/
const regex5 = /^([0-9]){10}$/
const regex6 = /^([0-9]){3}-([0-9]){3}-([0-9]){4}$/
const regex7 = /^[(]([0-9]){3}[)]([0-9]){3}-([0-9]){4}$/

const validArray = [regex1,regex2,regex3,regex4,regex5,regex6,regex7];

const isValid = (input) => validArray.some((regex) => regex.test(input));

checkButton.addEventListener("click", () => {
    if(input.value === "") {
        alert("Please provide a phone number");
        return;
    }

    results.innerHTML += isValid(input.value)
        ? `<span class="valid">Valid US Number:<br>${input.value}</span>`
        : `<span class="invalid">Invalid US Number:<br>${input.value}</span>`
    input.value = "";
});

clearButton.addEventListener("click", () => {
    input.value = "";
    results.innerHTML = "";
})


