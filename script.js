// Part 1: Refactoring Old Code
console.log("Part 1: Refactoring Old Code ...BEGIN")
console.log("======================================")

let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let csvString2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
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
console.log("Part 1: Refactoring Old Code ...BEGIN")
console.log("======================================")

// Part 2: Expanding Functionality
// ======================================
console.log("Part 2: Expanding Functionality ...BEGIN")
console.log("======================================")
// Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
// Begin with the following task:
    // Declare a variable that stores the number of columns in each row of data within the CSV.
    // Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// Step-1: Let's use split String method to spilt the data into nows by newline character ('\n')
let rows = csvString.split('\n');
console.log(rows)//We can now see that the first row contains the header data
// Step-2: Save the Header data into headerRow:
let headerRow = rows[0];
// Step-3: Let's dynamically calculate the number of columns
let numOfCols = headerRow.split(',').length
console.log(`Number of Columns: ${numOfCols}`) // Test out.

// Step -4: // Step 3: Initialize an empty array to hold the 2D array data
let twoDarray = [];
// Step-5: Loop through each row and split it into columns
for (let i = 0; i < rows.length; i++) {
    let columns = rows[i].split(',');
    // Then store each row as an array in the two D array (twoDarray)
    twoDarray.push(columns);
}

console.log(twoDarray);

console.log("Part 2: Expanding Functionality ...END")
console.log("======================================")

// Part 3: Transforming Data
console.log("Part 3: Transforming Data .. BEGIN")
console.log("======================================")
// While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself. When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.
// In order to make it more obvious what the data is, we will transform our rows into objects.

// 01-Extract the headers and convert them into lowercase
let headers = rows[0].split(',').map(header => header.toLowerCase());
// console.log(headers)// Test
// Step-2: Initialize an empty array to hold the object data later after data transformation
let transformedObjData = [];

// Step -3: Loop through row data and make sure to skip the headers.

for (let i=1; i < rows.length; i++) {
    // Split the rows into column values
    let rowValues = rows[i].split(',')
    // Initialize an object for colvalues
    let rowObject = {}
    // Map each rowValues to its corresponding header key
   for (let k = 0; k < rowValues.length; k++) {
    rowObject[headers[k]] = rowValues[k];
  }
  // Push or Add the created object to the array
  transformedObjData.push(rowObject);
}

console.log(transformedObjData)

console.log("Part 3: Transforming Data .. END")
console.log("======================================")


// Part 4: Sorting and Manipulating Data
console.log("Part 4: Sorting and Manipulating Data ...BEGIN")
console.log("======================================")

// It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
// Using array methods, accomplish the following tasks, in order upon the result of Part 3:
// Remove the last element from the sorted array.
// Insert the following object at index 1:
  // { id: "48", name: "Barry", occupation: "Runner", age: "25" }

// Step 1: Remove the last element from the object
transformedObjData.pop();
// console.log(transformedObjData)// check
// Step 2: Insert the new object at index 1 --->  { id: "48", name: "Barry", occupation: "Runner", age: "25" }
transformedObjData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
// Step 3: Add a new object to the end of the array ---> { id: "7", name: "Bilbo", occupation: "None", age: "111" }
transformedObjData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Step 4: Sort the array again by `id` 
transformedObjData.sort((a, b) => parseInt(a.id) - parseInt(b.id));


// Step 5: Calculate the average age using for loop
let totalAge = 0;
for (let i = 0; i < transformedObjData.length; i++) {
  totalAge += parseInt(transformedObjData[i].age); // Convert age to integer and sum it up
}


let averageAge = totalAge / transformedObjData.length;

// Output the manipulated array and the average age
console.log(transformedObjData);
console.log(`Average Age : ${averageAge}`);

console.log("Part 4: Sorting and Manipulating Data ...END")
console.log("======================================")


// Part 5: Full Circle
console.log("Part 5: Full Circle... BEGIN")
console.log("======================================")
// As a final task, transform the final set of data back into CSV format.
// There are a number of ways to do this; be creative!
// Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.

// Step 1: Extract the headers (keys from the first object)
let csvheaders = Object.keys(transformedObjData[0]);

// Step 2: Convert the csvheaders to a CSV row
let csvContent = csvheaders.join(',') + '\n';

// Step 3: Convert each object to a CSV row
for (let i = 0; i < transformedObjData.length; i++) {
    let row = Object.values(transformedObjData[i]).join(',');
    csvContent += row + '\n'; // Append each row followed by a newline
  }


  // Original CSV string
console.log(csvContent);


console.log("Part 5: Full Circle... END")
console.log("======================================")