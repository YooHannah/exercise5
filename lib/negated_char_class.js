module.exports = function (str) {
  // TODO
  var result = str.match(/^[^0-9][^A-Z]/);
  return result;
}