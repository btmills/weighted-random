# weighted-random

Select randomly from a list of weighted values.

## Usage

```js
var weightedRandom = require('weighted-random');

var movies = [
    { rating: 9.2, title: 'The Dark Knight' },
    { rating: 8.7, title: 'Inception' },
    { rating: 8.0, title: 'Jurassic Park' }
];

var weights = movies.map(function (movie) {
    return movie.rating;
}); // [9.2, 8.7, 8.0]

var selectionIndex = weightedRandom(weights); // 0, 1, or 2

var whatToWatch = movies[selectionIndex].title;
// About 36% of the time, we'll watch The Dark Knight.
// About 34% of the time, we'll watch Inception.
// About 31% of the time, we'll watch Jurassic Park.
```

## License

Copyright &copy; 2015 Brandon Mills. All rights reserved. Licensed under the terms of the MIT license, the full text of which is available in [LICENSE](LICENSE).
