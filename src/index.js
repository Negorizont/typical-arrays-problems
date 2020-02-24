
exports.min = function min (array = []) {
  if (array.length == 0) {
    return 0;
  }
  return array.reduce(function(min, current) {
    return current < min ? current : min;
  });
}

exports.max = function max (array = []) {
  if (array.length == 0) {
    return 0;
  }
  return array.reduce(function(max, current) {
    return current > max ? current : max;
  });
}

exports.avg = function avg (array = []) {
  if (array.length == 0) {
    return 0;
  }
  return array.reduce((a, b) => (a + b))/array.length;
}
