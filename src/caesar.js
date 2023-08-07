// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
      const alphabet = "abcdefghijklmnopqrstuvwxyz";

      let result = "";

      input = input.toLowerCase();

      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (!alphabet.includes(char)) {
          result += char;
          continue;
        }
        const direction = encode ? 1 : -1;
        const charIndex = alphabet.indexOf(char);
        let shiftedIndex = (charIndex + shift * direction) % 26;

        if (shiftedIndex < 0) {
          shiftedIndex += 26;
        }
        result += alphabet[shiftedIndex];
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
