
exports.min = function min (array) {

  if(Array.isArray(array) && array.length) {
    return Math.min(...array);
    } else {
  return 0;
  }
}

exports.max = function max (array) {

  if(Array.isArray(array) && array.length) {
    return Math.max(...array);
    } else {
  return 0;
  }
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    let average = (accumulator, curentValue) => (accumulator + curentValue);
    return array.reduce(average) / array.length;
  } else {
    return 0;
  }
}
