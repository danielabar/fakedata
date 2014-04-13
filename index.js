var _ = require('underscore');
var getters = require('./getters');

var fakeData = {
  namesData: require('./data/names.json'),
  emailsData: require('./data/emails.json')
};

// Define 'names' and 'emails' functions dynamically
getters(fakeData);

fakeData.obj = require('./obj');
module.exports = fakeData;