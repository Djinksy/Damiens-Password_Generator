// variables containing my generate password button and all the characters needed to create password.
var generateBtn = document.querySelector("#generate");
// arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var allChar = [];
// function generatePassword.
function generatePassword() {
    // window prompt asking how many characters. 
    var conLength = window.prompt(
        "How many characters do you want your password to be?"
    );
    // alert to confirm the length of password between 8-128
    if (conLength < 8 || conLength > 128) {
        alert("Please enter a number between 8 and 128.");
    } else { //window prompt asking to use lowercase characters. added .concat
        var upperChoice = confirm("Would you like to use uppercase characters?");
        if (upperChoice) {
            allChar = allChar.concat(upperCase)
        }; //window prompt asking would you like to use uppercase characters. added .concat
        var lowerChoice = confirm("Would you like to use lowercase characters?");
        if (lowerChoice) {
            allChar = allChar.concat(lowerCase)
        };
        // window prompt asking would you like to use symbols. //added .concat
        var symbolChoice = confirm("Would you like to use symbols?");
        if (symbolChoice) {
            allChar = allChar.concat(symbol)
        };
        // window prompt asking would you like to use numbers.// added .concat
        var numberChoice = confirm("Would you like to use numbers?");
        if (numberChoice) {
            allChar = allChar.concat(number)
        };
        if (
            lowerChoice === false &&
            upperChoice === false &&
            symbolChoice === false &&
            numberChoice === false
        ) { //alert to select atleast one character type if none are selected.
            alert("Please select at least one character type.");
            generatePassword();
        }
    } //using math.floor math.random to create the password length with all characters.
    var passwrd = "";
    console.log(allChar)
    for (let i = 0; i < conLength; i++) {
        passwrd += allChar[Math.floor(Math.random() * allChar.length)]
    } //returning the password
    return passwrd
}


function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);