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

var emplyeeInput = [];

var employeePassword = "";


}

if (employeePasswordLength === null) {
  
  return employeePassword = "";

}

//function to generate uppercase letters in password, confirmation prompt

else {

  var employeePasswordUpper = confirm("Do you want the password to have uppercase letters?");

}

//funciton to generate lowercase letters in password, confirmation prompt

else {

  var employeePasswordLower = confirm("Do you want the password to have uppercase letters?");

}

//function to generate numbers in password, confirmation prompt

else {

  var employeePasswordNumber = confirm("Do you want the password to have uppercase letters?");

}

//function to generate special characters in password, confirmation prompt

else {

  var employeePasswordSpecial = confirm("Do you want the password to have uppercase letters?");

}

//loop to check that a character type was chosen and password has between 8 & 128 characters



//function to shuffle password characters? function to randomize? (look up)