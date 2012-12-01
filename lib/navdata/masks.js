var constants = require('../constants');
exports.NAVDATA_NUM_TAGS         = Object.keys(constants.NAVDATA_KEYS).length;
exports.NAVDATA_OPTION_FULL_MASK = (1<<exports.NAVDATA_NUM_TAGS) - 1;

exports.TAG_TYPE_MASK = function (tagtype) {
  return (tagtype == 0) ? 0 : 1 << (tagtype - 1);
};

exports.NAVDATA_OPTION_MASK = function (option) {
  return 1 << option;
};

exports.combine = function (properties) {
  if (!Array.isArray(properties)) {
    properties = Array.prototype.slice.call(arguments);
  }

  var masks = properties.map(exports.NAVDATA_OPTION_MASK);
  var mask  = masks.reduce(function (prev, curr) {
    return prev | curr;
  });

  return mask;
};
