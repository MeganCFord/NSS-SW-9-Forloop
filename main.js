// Instructions

// Increment by 10

// Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.

// Example output:

// Current value is 5

// Current value is 15

// Current value is 25


for (var i = 5; i < 120; i += 10) {
  console.log("Current Value is " + [i]);
}

//******************success first time! no issues or questions!

// ...
// Decrement by division

// Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.

// Example output:

// Current value is 4096

// Current value is 2048

// Current value is 1024

for (var i = 4096; i >=1; i /= 2) {
  console.log( "Current value is ", i );
}

//************************also no issues here! I understood what I needed to do!

// Array iteration

// Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).

// Example output:

// President #1 was George Washington

//President #2 was John Adams

//President #3 was Thomas Jefferson
//
var presidents = [ 
  "George Washington",
  "John Adams",
  "Thomas Jefferson", 
  "James Madison", 
  "James Monroe", 
  "John Quincy Adams", 
  "Andrew Jackson", 
  "Martin Van Buren", 
  "William Henry Harrison", 
  "John Tyler", 
  "James K. Polk", 
  "Millard Fillmore", 
  "Franklin Pierce", 
  "James Buchanan", 
  "Abraham Lincoln", 
  "Andrew Johnson", 
  "Ulysses S. Grant", 
  "Rutherford B. Hayes",
  "James A. Garfield", 
  "Chester Arthur", 
  "Grover Cleveland", 
  "Benjamin Harrison", 
  "Grover Cleveland", 
  "William McKinley", 
  "Theodore Roosevelt", 
  "William Howard Taft", 
  "Woodrow Wilson", 
  "Warren G. Harding", 
  "Calvin Coolidge", 
  "Herbert Hoover", 
  "Franklin D. Roosevelt", 
  "Harry S. Truman", 
  "Dwight D. Eisenhower", 
  "John F. Kennedy", 
  "Lyndon B. Johnson",
  "Richard Nixon",
  "Gerald Ford", 
  "Jimmy Carter", 
  "Ronald Reagan", 
  "George Bush", 
  "Bill Clinton", 
  "George W. Bush", 
  "Barack Obama" 
  ]
var writePresident = document.getElementById("presidents");

  for (var i = 0; i < presidents.length; i++) {
    var presidentNumber = (i + 1)
    writePresident.innerHTML += "<p>President #" + presidentNumber + " was " + presidents[i] + ".</p>"
  }


  //**************** ended up with "president #0" here. not sure if making the president number i+1 in a variable was the most elegant solution but putting it into the string just pasted one onto the end of i instead of adding it. I didn't have trouble injecting the information into the page which was great. 
 
 
  
// Object iteration

// Use can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() to output the names of the keys in the object.

var antSpecies = {
   "argentine": {},
   "army": {},
   "big headed": {},
   "black": {},
   "bull": {},
   "carpenter": {},
   "crazy": {},
   "fire": {},
   "glider": {},
   "honey pot": {},
   "jack jumper": {}
 }

for (var keys in antSpecies) {
  console.log(keys);
}

//this was a completely new concept to me. 'in' gets the keys in antspecies. the var can be anything- the key is the word in. order not guaranteed. 