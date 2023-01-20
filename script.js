// Assignment code here
function generatePassword() {
  // different character sets available 
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789"
  var specChar = "!@#$%^&*()"
  var pw = "";
  var newSet = "";

  // query selectors determine the users password character preferences
  var upper = document.querySelector('#uppercase');
  var lower = document.querySelector('#lowercase');
  var num = document.querySelector('#numbers');
  var spec = document.querySelector('#specChar');

  // function that checks to see if option is checked and adds it to a new array(if true)
  function checkbox(box, charset) {
    for (i = 0; i <= 1; i++) {
      if (box.checked === true) {
        newSet += charset
      }
    }
  }
  checkbox(upper, upperCase);
  checkbox(lower, lowerCase);
  checkbox(num, numbers);
  checkbox(spec, specChar);

// function to create the password from the customized array
  for (i = 0; i < 20; i++) {
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
