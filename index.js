'use strict'

module.exports = function clip (pixels, shape, rect) {
	var stride = shape[2] || 4
	var row = shape[0],
		col = shape[1] || Math.floor(pixels.length / stride / row)
	var x = rect[0],
		y = rect[1] || 0,
		w = rect[2] || row - x,
		h = rect[3] || col - y

	var result = Array(w * stride * h)

	var off = y * row * stride + x * stride
	for (var j = 0; j < h; j++) {
		for (var i = 0; i < w; i++) {
			for (var k = 0; k < stride; k++) {
				result[j * w * stride + i * stride + k] = pixels[off + j * row * stride + i * stride + k]
			}
		}
	}

	return result
}
