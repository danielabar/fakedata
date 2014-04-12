var _ = require('underscore');

var fakeData = {

  namesData: require('./data/names.json'),
  emailsData: require('./data/emails.json'),

  names: function(count) {
    return _.toArray(_.sample(this.namesData, count));
  },

  emails: function(count) {
    return _.toArray(_.sample(this.emailsData, count));
  },

  obj: function(count, options) {
    var properties = Object.keys(options);

    var data = {};
    properties.forEach(function(item) {
      data[item] = this[item + "s"](count); // executes either names or emails function
    }, this); // this is bound to fakeData object

    var result = [];
    _.times(count, function(i) {
      var item = {};
      Object.keys(data).forEach(function(key) {
        item[key] = data[key][i];
      });
      result.push(item);
    });

    return result;
  }

};

module.exports = fakeData;