// Assignment code here
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// password generator function
function generatePassword() {
  // prompt for password length
  var passwordLength = window.prompt("How long do you want your password? (8-128 characters)");
  if (passwordLength < 8 || passwordLength > 128) {
      window.prompt("Please select a valid number.");
      return writePassword();
  }

  //prompt for numbers
  var passwordNumbers = window.confirm("Do you want to include numbers?");

  //prompt for symbols
  var passwordSymbols = window.confirm("Do you want to include symbols?");
}


// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

