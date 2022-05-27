// Assignment code here
var password = {
  letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*_-+="
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// password generator function
function generatePassword() {
  // prompt for password length
  var passwordLength = window.prompt("How long do you want your password? (8-128 characters)");
    if (passwordLength < 8 || passwordLength > 128) {
      window.prompt("Please select a valid number.");
  }
  //prompt for numbers
  var passwordNumbers = window.confirm("Do you want to include numbers?");
  //prompt for symbols
  var passwordSymbols = window.confirm("Do you want to include symbols?");

  for (var i = 0; i = passwordLength; i++) {
    if (passwordNumbers === true && passwordSymbols === true) {
      var randomPassword = Math.floor(Math.random() * (password.letters + password.numbers + password.symbols));
    }

    if (passwordNumbers === true && passwordSymbols === false) {
      var randomPassword = Math.floor(Math.random() * (password.letters + password.numbers));
    }

    if (passwordNumbers === false && passwordSymbols === true) {
      var randomPassword = Math.floor(Math.random() * (password.letters + password.symbols));
    }

    else {
      var randomPassword = Math.floor(Math.random() * (password.letters));
    }

    document.getElementById("password").innerHTML =  randomPassword.value
  }

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
