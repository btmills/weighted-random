var assert = require('chai').assert;
var weightedRandom = require('../lib/weighted-random');

function randomWeights(length) {
	var weights = new Array(length);
	var i;

	for (i = 0; i < length; i++) {
		weights[i] = Math.random() / Math.random(); // Occasionally > 1
	}

	return weights;
}

describe('weighted-random', function () {

	describe('given an empty list', function () {
		it('should return -1', function () {
			assert.equal(weightedRandom([]), -1);
		});
	});

	describe('given no weights', function () {
		it('should return -1', function () {
			assert.equal(weightedRandom([0, 0]), -1);
		});
	});

	describe('given a single weight', function () {
		it('should return 0', function () {
			assert.equal(weightedRandom([1]), 0);
		});
	});

	describe('given uneven weights', function () {
		it('should return the greater weight\'s index', function () {
			assert.equal(weightedRandom([1, 0]), 0);
			assert.equal(weightedRandom([0, 1]), 1);
		});
	});

	describe('given multiple weights', function () {

		it('should always return an integer', function () {
			var weights = randomWeights(10);
			var i, result;

			for (i = 0; i < 100; i++) {
				result = weightedRandom(weights);
				assert.isTrue(result % 1 === 0);
			}
		});

		it('should return an index within bounds', function () {
			var weights = randomWeights(10);
			var i, result;

			for (i = 0; i < 100; i++) {
				result = weightedRandom(weights);
				assert.isTrue(result >= 0 && result < weights.length);
			}
		});

	});

	it('should not mutate weights', function () {
		var weights = randomWeights(10);
		var copy = weights.slice();
		weightedRandom(weights);
		assert.sameMembers(weights, copy);
	});

});
