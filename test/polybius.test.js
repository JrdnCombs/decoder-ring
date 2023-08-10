const { expect } = require('chai');
const { polybius } = require('../src/polybius.js');

describe('Polybius Module', () => {
  describe('Encoding', () => {
    it('should encode the letters i and j to 42', () => {
      const encoded = polybius('ij');
      expect(encoded).to.equal('4242');
    });

    it('should ignore capital letters', () => {
      const encodedUpper = polybius('A Message');
      const encodedLower = polybius('a message');
      expect(encodedUpper).to.equal(encodedLower);
    });

    it('should maintain spaces in the message', () => {
      const encoded = polybius('a message');
      const expected = '11 23513434112251';
      expect(encoded).to.equal(expected);
    });
  });

  describe('Decoding', () => {
    it('should decode 42 to (i/j)', () => {
      const decoded = polybius('4242', false);
      expect(decoded).to.equal('(i/j)(i/j)');
    });

    it('should maintain spaces in the decoded message', () => {
      const decoded = polybius('11 23513434112251', false);
      const expected = 'a message';
      expect(decoded).to.equal(expected);
    });
  });
});


