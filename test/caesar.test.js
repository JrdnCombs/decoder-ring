// Write your tests here!
const assert = require('chai').assert;
const caesar = require('../src/caesar.js');

describe('Caesar Cipher', function() {
  it('returns false if the shift value is invalid', function() {
    assert.equal(caesar.caesar("Zebra Magazine", 0), false);
    assert.equal(caesar.caesar("Zebra Magazine", -26), false);
    assert.equal(caesar.caesar("Zebra Magazine", 26), false);
    assert.equal(caesar.caesar("Zebra Magazine"), false);
  });

  it('ignores capital letters', function() {
    assert.equal(caesar.caesar("A Message", 3), caesar.caesar("a message", 3));
  });

  it('handles shifts that go past the end of the alphabet (wrapping)', function() {
    assert.equal(caesar.caesar("Zebra Magazine", 3), "cheud pdjdclqh");
  });

  it('maintains spaces and non-alphabetic symbols', function() {
    assert.equal(caesar.caesar("Hello, World!", 5), "mjqqt, btwqi!");
  });

  it('works for both encoding and decoding', function() {
    assert.equal(caesar.caesar("cheud pdjdclqh", 3, false), "zebra magazine");
  });
});

