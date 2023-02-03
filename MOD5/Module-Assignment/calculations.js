let table = prompt("Enter a number from 0-10 (must be a whole number)"); // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1; // Set counter to 1
var msg = '<h2>Multiplication Table</h2>'; // Message

// Invalid responses
while (table > 10 || table < 0 || table % 1 != 0 ) {
  table = prompt("Number must be a whole number between 0-10. Try again.")
}

// Calculations
while (i < 11) {
  msg += i + ' * ' + table + ' = ' + (i * table) + '<br />';
  i++
}

// UNUSED CODE
//if (operator === 'addition') {
  // Do addition
//while (i < 11) {
//    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
//    i++;
//  }
//} else {
  // Do multiplication
//  while (i < 11) {
//    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
//    i++;
//  }
//}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
