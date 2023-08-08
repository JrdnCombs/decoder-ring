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
    
    let result = "";

    input = input.toLowerCase();
   
    for (let i = 0; i < input.length; i++) {
      char = input[i];
      asciiNum = char.charCodeAt();
      if (asciiNum < 97 || asciiNum > 122) {
        result += char
      }
      else {
      const direction = encode ? 1 : -1;
      let shifted = asciiNum + (shift * direction);
        if (shifted < 97) {
          shifted += 26;
        } else if (shifted > 122) {
          shifted -= 26;
        }
        result += String.fromCharCode(shifted);
      } 
    }
    return result;
  }
  return {
    caesar: caesar
  };
})();

module.exports = { caesar: caesarModule.caesar };
