let userString = prompt("Enter any string to be converted into all caps. Any whitespace from the start and end of your input will be removed.")
var msg = 'Converted String: '
var result = userString.toUpperCase();

document.getElementById('convert').innerHTML = msg + result.trim();
