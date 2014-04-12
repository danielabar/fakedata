var assert = require('assert'); // comes with node
var proxyquire = require('proxyquire').noCallThru();

var fakeData = proxyquire('../index.js', {
  './data/names.json': ['Jack Franklin', 'Jeffrey Way']
});

describe('fakeData names method', function() {

  it('gives us back one name if we pass in 1', function() {
    var name = fakeData.names(1);
    assert.equal(1, name.length);
    assert(name[0] === 'Jack Franklin' || name[0] === 'Jeffrey Way');
  });

});