// Assignment Code
var generateBtn = document.querySelector("#generate");
// variable arrays containing all characters needed to generate password.
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// prompt to see how many characters the password will contain.
var conLength = window.prompt("How many characters would you like your password to be?", );
if (conLength < 8 || conLength > 128) {
    alert("Password must be contain between 8-128 characters")
}
// window confirms to select what characters you want to be inside your password.
if (conLength > 8 && conLength <= 128) {
    var number = window.confirm("Would you like to use numbers?");
    var symbols = window.confirm("Would you like to use symbols?");
    var lowerCase = window.confirm("Would you like to use lowercase letters?");
    var upperCase = window.confirm("Would you like to use uppercase letters?");
}
// alert popup making you select atleast one of the characters
if (number != true && symbols != true && lowerCase != true && upperCase != true) {
    alert("Password must contain at least one of these characters!");
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);