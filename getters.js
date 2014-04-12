var _ = require('underscore');

var getters = function(fakeData) {
  ['names', 'emails'].forEach(function(name) {
    fakeData[name] = function(count) {
      return _.sample(this[name + "Data"], count);
    };
  });
};

module.exports = getters;