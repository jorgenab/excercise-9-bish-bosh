// JavaScript Document
//
// Bish-Bosh Version 1.

function showMessage(id, message){
	document.getElementById(id).textContent = message;
}

function divisibleBy(numerator, denominator) {
	return (numerator % denominator) == 0;
}

function bishBosh() {
	let answer = "";
	for(let count = 1; count <= 100; count++) {
		let divisibleBy3 = divisibleBy(count, 3);
		let divisibleBy4 = divisibleBy(count, 4);
		if (divisibleBy3 && divisibleBy4) {
			answer = answer + "Bish-Bosh"
		}
		else if (divisibleBy3) {
			answer = answer + "Bish";
		}
		else if (divisibleBy4) {
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