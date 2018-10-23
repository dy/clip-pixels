Slice rectangle from an array with pixels. [![Build Status](https://travis-ci.org/dy/clip-pixels.svg?branch=master)](https://travis-ci.org/dy/clip-pixels)

### `clip(arr, shape=[w, h?, channels=4], rect=[x, y?, w?, h?])`

```js
var clip = require('clip-pixels')

var pixels = [
0, 1, 0,
1, 1, 1,
0, 1, 0
]
pixels = clip(pixels, [3, 3, 1], [1, 0, 2, 3])

/*
1, 0,
1, 1,
1, 0
*/
```
