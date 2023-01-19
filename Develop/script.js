// Assignment code here
function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789"
  var specChar = "!@#$%^&*()"
  var pw = "";

  
  




  for (i = 0; i <=15; i++) {
    pw += newSet.charAt(Math.floor(Math.random()*newSet.length));
  }
  return pw
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
