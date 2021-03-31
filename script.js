function getPositionDots(string) {
	let arrayResult = [];
	let arrayLetters = string.split('');

	function getDots(currentString, remainArray) {
		let arrayRemainClone = remainArray.slice();
		if (arrayRemainClone.length !== 1) {
			let currentLetter = remainArray[0];
			arrayRemainClone.shift();
			getDots(currentString.concat(currentLetter), arrayRemainClone);
			getDots(currentString.concat(currentLetter + '.'), arrayRemainClone);
		} else {
			arrayResult.push(currentString.concat(remainArray[0]));
		}
	}
	getDots('', arrayLetters);

	return arrayResult;

}

console.log(getPositionDots('abcde'));
