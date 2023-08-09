const { expect } = require('chai');
const substitutionModule = require('../src/substitution.js'); // Update with the correct path

const { substitution } = substitutionModule;

describe('substitution', () => {
  it('should return false if the given alphabet is not exactly 26 characters long', () => {
    expect(substitution("message", "abc")).to.equal(false);
  });

  it('should correctly translate the given phrase based on the alphabet', () => {
    expect(substitution("message", "plmoknijbuhvygctfxrdzeswaq")).to.equal("ykrrpik");
  });

  it('should return false if there are any duplicate characters in the given alphabet', () => {
    expect(substitution("message", "plmoknijbuhvygctfxrdzeswaqaaa")).to.equal(false);
  });

  it('should maintain spaces in the message before and after encoding/decoding', () => {
    expect(substitution("a message", "plmoknijbuhvygctfxrdzeswaq")).to.equal("p ykrrpik");
  });

  it('should ignore capital letters', () => {
    expect(substitution("A Message", "plmoknijbuhvygctfxrdzeswaq")).to.equal("p ykrrpik");
  });
});


