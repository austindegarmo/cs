var result = binarySearch([
	1,
	23,
	43,
	56,
	77,
	89,
	211,
	212,
	789,
	972,
	1001,
	4567,
	4599,
	83784
	], 77);

console.log(result);

function binarySearch(stuff, seachElement) {

	//starting values for function
	var currentElement;
	var currentIndex;
	var maxIndex = stuff.length - 1;
	var minIndex = 0;

	//main while loop
	while (minIndex <= maxIndex) {

		//looks for indicy in the middle of the array to check if it's greater or larger 
		currentIndex = Math.floor((minIndex + maxIndex) / 2);

		//define element that is grabbed 
		currentElement = stuff[currentIndex];
		console.log('Start Index: ', minIndex)
		console.log('End Index: ', maxIndex)
		console.log('Current Element', stuff[currentIndex])

		//test that bitch,
		if (currentElement < seachElement) {
			//if it's less, look above for other integer
			minIndex = currentIndex + 1;
		}
		else if (currentElement > seachElement) {
			//if it's more, send the value below to look for the integer
			maxIndex = currentIndex - 1;

		}
		else {
			//when found, display that shit
			 console.log('Current Index: ', currentIndex)
      console.log('Current Element', stuff[currentIndex])
      console.log(" ------- ")
      return currentIndex;
		}
	}
	return false;
}