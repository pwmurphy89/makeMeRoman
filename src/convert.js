var romanArray = [
	{number: 1000, character: 'M'},{number: 500, character: 'D'},
	{number: 100, character: 'C'},{number: 50, character: 'L'},
	{number: 10, character: 'X'},{number: 5, character: 'V'},
	{number: 1, character: 'I'}
];
var nineTenths = 0.9;
var fourFifths = 0.8;

function makeMeRoman(number){
	var romanString = "";
	for(var i=0; i<romanArray.length;i++){
		var numberOfNumeral = Math.floor(number / romanArray[i].number);
		for (var j=0; j<numberOfNumeral;j++) { romanString += romanArray[i].character; } 
		number -= numberOfNumeral * romanArray[i].number;
		var remainderAsFraction = number/romanArray[i].number;
		var resultsOf = checkForSpecialCase(remainderAsFraction, i);
		romanString += resultsOf[0];
		number -= resultsOf[1];
	}
	return romanString;
}

function checkForSpecialCase(remainderAsFraction, index){
	var indexIsOdd = index % 2;
	var charsToAdd = '';
	var numToSubtract = 0;
	if (!indexIsOdd && remainderAsFraction >= nineTenths){
		charsToAdd = romanArray[index + 2].character + romanArray[index].character;
		numToSubtract = romanArray[index].number * nineTenths;
	}
	if (indexIsOdd && remainderAsFraction >= fourFifths){
		charsToAdd = romanArray[index + 1].character + romanArray[index].character;
		numToSubtract = romanArray[index].number * fourFifths;
	}
	return [charsToAdd, numToSubtract]; 
}



