Clip pixels array:

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

## `clip(arr, shape=[w, h, channels?], rect=[x, y, w, h])`

[![Build Status](https://travis-ci.org/dy/clip-pixels.svg?branch=master)](https://travis-ci.org/dy/clip-pixels)

## © dy
