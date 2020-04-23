// JavaScript Document
//
// Testing misc code
function showMessage(message){
	document.getElementById('message').textContent = message;
}

// alert('Hello, World!');
// console.log('Till console');
// console.log('Mer till console');

showMessage('Hello World');

// back-ticks for variabels in strings
let name = "jorgen";
let message = `Hello ${name}`;
showMessage(message);
