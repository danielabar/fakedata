var assert = require('assert'); // comes with node
var proxyquire = require('proxyquire').noCallThru();

var fakeData = proxyquire('../index.js', {
  './data/names.json': ['Jack Franklin', 'Jeffrey Way'],
  './data/emails.json': ['test1@example.com', 'test2@example.com']
});

describe('fakeData names method', function() {

  it('gives us back one name if we pass in 1', function() {
    var name = fakeData.names(1);
    assert.equal(1, name.length);
    assert(name[0] === 'Jack Franklin' || name[0] === 'Jeffrey Way');
  });

  it('gives us back two names if we pass in 2', function() {
    var name = fakeData.names(2);
    assert.equal(2, name.length);
    assert(name.indexOf('Jack Franklin') > -1);
    assert(name.indexOf('Jeffrey Way') > -1);
  });

});

describe('fakeData emails method', function() {

  it('gives us back one email if we pass in 1', function() {
    var email = fakeData.emails(1);
    assert.
    equal(1, email.length);
    assert(email[0] === 'test1@example.com' || email[0] === 'test2@example.com');
  });

  it('gives us back two emails if we pass in 2', function() {
    var email = fakeData.emails(2);
    assert.equal(2, email.length);
    assert(email.indexOf('test1@example.com') > -1);
    assert(email.indexOf('test2@example.com') > -1);
  });

});