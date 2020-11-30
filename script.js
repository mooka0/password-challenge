// Assignment code here
var generateBtn = document.querySelector("#generate");

// 
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Check the length of the password

function passwordOptions() {
  var passwordLength = parseInt(prompt("Choose a length of password (at least 8 characters and no more than 128 characters)"));

  if (isNaN(passwordLength) === true) {
    alert("Password length needs to be provided as a number!")
  }


  if (passwordLength < 8) {
    alert("Password length must be between 8-128 characters.");
  }

  if (passwordLength > 128) {
    alert("Password length must be between 8-128 characters.");
  }
  
  var hasSpecial = confirm("Do you want any Special Characters?")

  var hasNumbers = confirm("Do you want any Numaric Characters?")

  var hasLower = confirm("Do you want any Lower Case Characters?")

  var hasUpper = confirm("Do you want any Upper Case Characters?")

  if (hasSpecial === false &&
    hasNumbers === false &&
    hasLower === false &&
    hasUpper === false) {
    alert("Need to at least choose one set of characters");
    return
  }

  var passwordChoices ={
    passwordLength: passwordLength,
    hasSpecial: hasSpecial,
    hasNumbers: hasNumbers,
    hasLower: hasLower,
    hasUpper: hasUpper
  }

  return passwordChoices;

}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
}

function generatePassword() {
  var options = passwordOptions();
  var result = [];
  var possibleChar = [];
  var guaranteedChar = [];

if (options.hasSpecial) {
  possibleChar = possibleChar.concat(specialCharacters);
  guaranteedChar.push(getRandom(specialCharacters));
}

if (options.hasNumbers) {
  possibleChar = possibleChar.concat(numericCharacters);
  guaranteedChar.push(getRandom(numericCharacters));
}

if (options.hasLower) {
  possibleChar = possibleChar.concat(lowerCasedCharacters);
  guaranteedChar.push(getRandom(lowerCasedCharacters));
}

if (options.hasUpper) {
  possibleChar = possibleChar.concat(upperCasedCharacters);
  guaranteedChar.push(getRandom(upperCasedCharacters));
}

for (var i = 0; i < options.passwordLength; i++) {
  var possibleChar = getRandom(possibleChar);
  result.push(possibleChar);
}
for (var i = 0; i < guaranteedChar.length; i++) {
  result[i] = guaranteedChar[i];
}
return result.join('');

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
