// JavaScript Document
//
// Bish-Bosh Version 1.

function showMessage(id, message){
	document.getElementById(id).textContent = message;
}

function divisbleBy(numerator, denominator) {
	return (numerator % denominator) == 0;
}

// Does not work
function bishBosh() {
	let answer = "";
	for(let count = 1; count <= 100; count++) {
		let divisbleBy3 = divisbleBy(count, 3);
		let divisbleBy4 = divisbleBy(count, 4);
		if (divisbleBy3 && divisbleBy4) {
			answer = answer + "Bish-Bosh"
		}
		else if (divisbleBy3) {
			answer = answer + "Bish";
		}
		else if (divisbleBy4) {
			answer = answer + "Bosh";
		}
		else {
			answer = answer + count;
		}
		
		// No comma or space after last number
		if (count != 100) {
			answer = answer + ", ";
		}
	}
	return answer;
}

showMessage("answer", bishBosh());