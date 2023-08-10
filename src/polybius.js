// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polybiusSquare = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "i/j", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"]
    ];
  
    input = input.toLowerCase();
    let result = "";
  
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === " ") {
          result += char;
        } else if (char === "i" || char === "j") {
          result += "42";
        } else {
          for (let row = 0; row < polybiusSquare.length; row++) {
            const column = polybiusSquare[row].indexOf(char);
            if (column !== -1) {
              result += `${column + 1}${row + 1}`;
              break;
            }
          }
        }
      }
    }
  
    if (!encode) {
      if (input.replace(/\s/g, '').length % 2 !== 0) {
        return false;
      } else {
        for (let i = 0; i < input.length; i++) {
          const char = input[i];
          if (char === " ") {
            result += char;
          } else if (char === "4" && input[i + 1] === "2") {
            result += "(i/j)";
            i++;
          } else {
            const row = parseInt(input[i + 1]) - 1;
            const col = parseInt(char) - 1;
            result += polybiusSquare[row][col];
            i++;
          }
        }
      }
    }
    
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
