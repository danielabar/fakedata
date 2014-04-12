var fakeData = require('./index.js');

var names = fakeData.names(5);
// console.log(JSON.stringify(names, null, 2));

var emails = fakeData.emails(5);
// console.log(JSON.stringify(emails, null, 2));

var users = fakeData.obj(5, {
  name: true,
  email: true
});

console.log(JSON.stringify(users, null, 2));