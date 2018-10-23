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

API: `clip(arr, shape=[w, h, channels?], rect=[x, y, w, h])`

## © dy
