var assert = require('assert'); // comes with node
var proxyquire = require('proxyquire').noCallThru();

var fakeData = proxyquire('../index.js', {
  './data/names.json': ['Jack Franklin', 'Jeffrey Way'],
  './data/emails.json': ['test1@example.com', 'test2@example.com']
});

describe('fakeData obj method', function() {

  it('returns an array of objects', function() {
    var result = fakeData.obj(1, {
      name: true
    });
    assert.equal(1, result.length);
    var name = result[0].name;
    assert(name === 'Jack Franklin' || name === 'Jeffrey Way');
  });

  it('returns an array of objects with the specific properties', function() {
    var result = fakeData.obj(1, {
      name: true,
      email: true
    });
    assert.equal(1, result.length);

    var name = result[0].name;
    assert(name === 'Jack Franklin' || name === 'Jeffrey Way');

    var email = result[0].email;
    assert(email === 'test1@example.com' || email === 'test2@example.com');
  });

});