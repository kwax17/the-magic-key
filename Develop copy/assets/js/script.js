// Assignment code here
var password = {
  letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  alphaLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbols: ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "~"]
};

var randomPassword = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// password generator function
function generatePassword() {

  // prompt for password length
  var passwordLength = window.prompt("How long do you want your password? (8-128 characters)"); 
    if (passwordLength < 8 || passwordLength > 128) {
      window.prompt("Please select a valid number.");
      
      generatePassword();

    } else {
      // prompt for capital letters
      var passwordAlpha = window.confirm("Do you want capital letters?");
      //prompt for numbers
      var passwordNumbers = window.confirm("Do you want to include numbers?");
      //prompt for symbols
      var passwordSymbols = window.confirm("Do you want to include symbols?");
    };
  
  // sets the parameters
  var passwordCharacters = []
  passwordCharacters = passwordCharacters.concat(password.letters)
    if (passwordAlpha === true) {
      passwordCharacters = passwordCharacters.concat(passwordCharacters, password.alphaLetters)
    }

    if (passwordNumbers === true) {
      passwordCharacters = passwordCharacters.concat(passwordCharacters, password.numbers)
    }

    if (passwordSymbols === true) {
      passwordCharacters = passwordCharacters.concat(passwordCharacters, password.symbols)
    }
  
  // randomizes the arrays
  var randomPassword = ""
  for (var i = 0; i <= passwordLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

  };

  // prints password 
  return randomPassword;
  
};

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
