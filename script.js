// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "/", "?"];


//function to generate password length, prompt to gather desired number of characters
function generatePassword() {

  var employeeInput = [];

  var characterCount = 0;

  var employeePassword = "";

  var employeePasswordLength = prompt("How long would you like your password to be? (Password must be between 8 and 128 characters")

  var employeeLengthParse = parseInt(employeePasswordLength);

  if (employeePasswordLength === null) {

    return employeePassword = "";

  }


  else if (Number.isNaN(employeeLengthParse) || employeePasswordLength < 8 || employeePasswordLength > 128) {

    return employeePassword = "";

  }

  //function to generate uppercase letters in password, confirmation prompt

  else {

    var employeePasswordUpper = confirm("Do you want the password to have uppercase letters?");

    if (employeePasswordUpper) {

      characterCount++;

      console.log(characterCount);

      employeeInput = employeeInput.concat(upperCase);

      console.log(employeePasswordUpper);

      console.log(employeeInput)

      for (var i = 0; i < 1; i++) {

        var index1 = Math.floor(Math.random() * upperCase.length);

        employeePassword += upperCase[index1] + "";

        console.log(employeePassword)

      }

    }

    //function to generate lowercase letters in password, confirmation prompt


    var employeePasswordLower = confirm("Do you want the password to have lowercase letters?");

    if (employeePasswordLower) {

      characterCount++;

      console.log(characterCount);

      employeeInput = employeeInput.concat(lowerCase);

      for (var i = 0; i < 1; i++) {

        var index1 = Math.floor(Math.random() * lowerCase.length);

        employeePassword += lowerCase[index1] + "";
      }

    }
    //function to generate numbers in password, confirmation prompt

    var employeePasswordNumber = confirm("Do you want the password to have numbers?");

    if (employeePasswordNumber) {

      characterCount++;

      console.log(characterCount);

      employeeInput = employeeInput.concat(numbers);

      for (var i = 0; i < 1; i++) {

        var index1 = Math.floor(Math.random() * numbers.length);

        employeePassword += numbers[index1] + "";

      }


      //function to generate special characters in password, confirmation prompt


      var employeePasswordSpecial = confirm("Do you want the password to have special characters?");

      if (employeePasswordSpecial) {

        characterCount++;

        console.log(characterCount);

        employeeInput = employeeInput.concat(specialCharacters);

        for (var i = 0; i < 1; i++) {

          var index1 = Math.floor(Math.random() * specialCharacters.length);

          employeePassword += specialCharacters[index1] + "";

        }

      }

      if (employeePasswordUpper === false && employeePasswordLower === false && employeePasswordNumber === false && employeePasswordSpecial === false) {

        return employeePassword = "";

      }
    }

    for (var i = 0; i < employeePasswordLength - characterCount; i++) {

      var index = Math.floor(Math.random() * employeePassword.length);

      employeePassword += employeeInput[index] + "";


    }

    function passwordArray() {

      var password = employeePassword;

      var array = password.split("");

      return array;

    }

    function shufflePassword(passwordArr) {

      var passwordArr = passwordArray();

      var currentIndex = passwordArr.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex -= 1;

        temporaryValue = passwordArr[currentIndex];

        passwordArr[currentIndex] = passwordArr[randomIndex];

        passwordArr[randomIndex] = temporaryValue;


      }

      return passwordArr;

    }

    var newPassword = shufflePassword(passwordArray);

    employeePassword = newPassword.join("");

    return employeePassword;

  }
}