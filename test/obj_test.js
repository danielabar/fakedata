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
  });

});