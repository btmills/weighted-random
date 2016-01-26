'use strict';

/**
 * Selects a random index given weights.
 * @param {number[]} weights - A list of numbers representing weights.
 * @returns {number} An index in the list, selected based on the given weights.
 */
module.exports = function (weights) {
	var totalWeight = 0,
		i, random;

	for (i = 0; i < weights.length; i++) {
		totalWeight += weights[i];
	}

	random = Math.random() * totalWeight;

	for (i = 0; i < weights.length; i++) {
		if (random < weights[i]) {
			return i;
		}

		random -= weights[i];
	}

	return -1;
};
