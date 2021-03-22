// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "/", "?"];


//function to generate password length, prompt to gather desired number of characters
function generatePassword () {

var employeePasswordLength = prompt("How long would you like your password to be? (Password must be between 8 and 128 characters")

//if statement for 

var employeeInput = [];

var employeePassword = "";

var characterCount = 0;


if (employeePasswordLength === null) {
  
  return employeePassword = "";

}

}
//function to generate uppercase letters in password, confirmation prompt

else {

  var employeePasswordUpper = confirm("Do you want the password to have uppercase letters?");

  if (employeePasswordUpper) {

    employeeInput = employeeInput.concat(upperCase);

    for (var i = 0; i < 1; i++) {

      var index1 = Math.floor(Math.random() * upperCase.length;
      
      employeePassword += upperCase[index1] + "";

    }
    
  }

//function to generate lowercase letters in password, confirmation prompt

else {

  var employeePasswordLower = confirm("Do you want the password to have lowercase letters?");

  if (employeePasswordLower) {

    employeeInput = employeeInput.concat(lowerCase);

    for (var i = 0; i < 1; i++) {

      var index1 = Math.floor(Math.random() * lowerCase.length;
      
      employeePassword += lowerCase[index1] + "";
}

  }
//function to generate numbers in password, confirmation prompt

else {

  var employeePasswordNumber = confirm("Do you want the password to have numbers?");

  if (employeePasswordNumber) {

    employeeInput = employeeInput.concat(numbers);

    for (var i = 0; i < 1; i++) {

      var index1 = Math.floor(Math.random() * numbers.length;
      
      employeePassword += numbers[index1] + "";

}

  }
//function to generate special characters in password, confirmation prompt

else {

  var employeePasswordSpecial = confirm("Do you want the password to have special characters?");

  if (employeePasswordSpecial) {

    employeeInput = employeeInput.concat(specialCharacters);

    for (var i = 0; i < 1; i++) {

      var index1 = Math.floor(Math.random() * specialCharacters.length;
      
      employeePassword += specialCharacters[index1] + "";

}

  }

//loop to check that a character type was chosen and password has between 8 & 128 characters



//function to shuffle password characters? function to randomize?