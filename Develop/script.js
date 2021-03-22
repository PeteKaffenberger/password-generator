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

var userPasswordLength = prompt("How long would you like your password to be? (Password must be between 8 and 128 characters")

//if statement for 

var userInput = [];

var userPassword = "";

var userPassword = "";

}



//function to generate uppercase letters in password, confirmation prompt



//funciton to generate lowercase letters in password, confirmation prompt



//function to generate numbers in password, confirmation prompt



//function to generate special characters in password, confirmation prompt



//loop to check that a character type was chosen and password has between 8 & 128 characters



