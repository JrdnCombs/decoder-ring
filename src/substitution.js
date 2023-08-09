// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const original = "abcdefghijklmnopqrstuvwxyz"
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }
    input = input.toLowerCase();
    
    let result = "";
    
    for (let i = 0; i < input.length; i++) {
      char = input[i];
      if (char === " ") {
        result += char
      } else {
        const index = encode ? original.indexOf(char) : alphabet.indexOf(char);
        result += encode ? alphabet[index] : original[index];
      }
    }
    return(result)
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
