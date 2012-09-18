//
// The argument `integer` for `decompose` is... An integer. Surprise!
//
// The return value is an object with keys corresponding to the bits that are
// set to `1` in the integer.
//
// Example:
//
//     var o = compost.decompose(5); // {0: true, 2: true}
//

exports.decompose = function decompose(integer) {
  var object = {},
      i = 0;

  while (integer > 0) {
    if (integer & 0x01) {
      object[i] = true;
    }

    integer >>= 1;
    i++;
  }

  return object;
};

//
// The argument here is an object with keys corresponding to bits to set in the
// integer to return. The return value is an integer, in case that wasn't
// already obvious.
//
// Example:
//
//     var i = compost.compose({0: true, 2: true}); // 5
//

exports.compose = function compose(object) {
  return Object.keys(object).filter(function(k) {
    return !!object[k];
  }).reduce(function(i, v) {
    return i + (1 << parseInt(v, 10));
  }, 0);
};
