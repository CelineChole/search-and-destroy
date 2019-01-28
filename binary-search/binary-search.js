'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length === 0) {
		return false;
	} else if (array.length === 1) {
		if (array[0] === target) {
			return true 
		} else {
			return false
		}
	} else if (array.length === 2) {
		if (array[0] === target) {
			return true
		} else if (array[1] === target) {
			return true
		} else {
			return false
		}
	} else {
		const mid = Math.floor(array.length / 2);

		if (array[mid] < target) {
			return binarySearch(array.slice(0, mid), target)
		} else if (array[mid] === target) {
			return true
		} else {
			return binarySearch(array.slice(mid + 1, array.length), target)
		}
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch