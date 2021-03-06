'use strict'

var clip = require('./')
var a = require('assert')


var pixels = [
0, 1, 0,
1, 1, 1,
0, 1, 0
]
a.deepEqual(clip(pixels, [3, 3, 1], [1, 0, 2, 3]),
[
1, 0,
1, 1,
1, 0
])


// short args
var pixels = [
0,0,0,0, 1,1,1,1, 0,0,0,0,
1,1,1,1, 1,1,1,1, 1,1,1,1,
0,0,0,0, 1,1,1,1, 0,0,0,0
]
a.deepEqual(clip(pixels, [3], [1, 0]),
[
1,1,1,1, 0,0,0,0,
1,1,1,1, 1,1,1,1,
1,1,1,1, 0,0,0,0
])
