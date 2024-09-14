// Plan:
    // 1. Loop through the string character by character.
    // 2. Store the contents of each cell in a temporary variable.
    // 3. When a comma (,) is encountered, log the cell and reset the temporary variable for the next cell.
    // 4. When the newline sequence (\n) is encountered, treat it as a signal that the row is complete, log the row, and move to the next row.

// Save the string in variable, name `csvString`

let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// Empty string to store the cell data later
let cell = ""
// Create an empty list to save the row data later.
let row = []

// Loop though each character using For loop and save the character
for (let i =0; i < csvString.length; i++) {
    // console.log(i)
    let char = csvString[i];
     // If the character is a "," its means we reached at the end of a cell
    if (char === ",") {
        row.push(cell) // Append/Add the cell to the row
        cell = ""; // Reset the cell for the next one
    // If the character is a newline, \n, its means we reached the end of row
    } else if (char=== "\n"){
        row.push(cell); // Append/Add the last cell to the row
        console.log(row); // Print the row content
        row = []; // Reset the row for the next one
        cell = ""; // Reset the cell for the next one
    // If it's neither, keep building the cell content
    } else {
        cell += char;
    }
    
}
// Handle the last row in case there is no newline at the end

if (cell) {
    row.push(cell);
    console.log(row);
}



// R-ALAB 308.4.1: 
// Working with Data Collections

// Part 1: Refactoring Old Code
// ===============================
// When code is outdated or inefficient, it often goes through a process called “refactoring.” 
// Refactoring code is the process of restructuring that code without changing its original behavior.
// For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs.
// Now that you have knowledge of arrays and objects, how would you change your approach to this problem? 
// Take a few minutes to examine and refactor the code before continuing.
// For reference, ALAB 308.3.1 is embedded below. The section on CSV parsing is “Part 3.”

// --- What do I know / have---
// 01 - code from ALAB 308.3.1 

// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.


for (let i = 1; i<=100; i++) {
    if (!(i % 3)  && !(i % 5)) { // if true and true = true then ---
        console.log(`Fizz Buzz. ${i}`) // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    }else if (!(i % 3)){// if true, then..
        console.log(`Fizz. ${i}`) // If a number is divisible by 3, log “Fizz.”
    } else if (!(i % 5)) { // if true, then..
        console.log(`Buzz. ${i}`) // If a number is divisible by 5, log “Buzz.”
    } else { // otherwise ... 
        console.log(`${i} is not divisible by either 3 or 5`) // If a number is not divisible by either 3 or 5, log the number.
    }
}

// Code Refactor
// Goal: We want to refactor the above code to printout our final output in array like object
let resultObject = []; // Initialize an empty array object

for (let i = 1; i <= 100; i++) {
    let output = '';

    if (!(i % 3)) output += 'Fizz';
    if (!(i % 5)) output += 'Buzz';

    // If neither "Fizz" nor "Buzz" was added, set a fallback message
    output = output || 'not divisible by either 3 or 5';

    // Push an object to the array with the number and the corresponding output
    resultObject.push({ ourNumber: i, OurMessage: output });
}

// Output the array to see the results
console.log(resultObject);

