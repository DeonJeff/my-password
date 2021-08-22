var passwordLength = 8;
var choice = [];

var upperCase = ["A" ,"B" ,"C", "D", "E", "F", "G", "H", "I", "J", "K", "L" ,"M", "N", "O", "P", "Q" ,"R", "S", "T" ,"U", "V", "W" ,"X" ,"Y" ,"Z"];
var lowerCase = ["a" ,"b" ,"c", "d", "e", "f", "g", "h", "i" ,"j", "k",, "l", "m" ,"n", "o", "p", "q", "r", "s", "t", "u" ,"v", "w", "x", "y", "z"];
var number    = ["1", "2", "3", "4" , "5" ,"6" , "7" , "8" , "9" , "0"] ;
var specialCharr = ["!", "@", "#", "$", "%", "%", "*", "&", "(", ")", "^", "<", ">", "/","{", "}"];

// assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() { 
  var correctPrompts = getPrompts();  // either true or false
  var passwordText = document.querySelector("#password");
  

  if (correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
   } else {
    passwordTest.value = "";
   }
  }

function generatePassword() {
  // I would generatePassword based on the prompts
  var password = "";
  for(var i = 0; i < characterLength; i++ ) {
       var randomIndex = Math.floor(Math.random() * choice.length);
       password = password + choice[randomIndex];
} 
  return password;
}

function getPrompts() {
choice = [];

characterLength = parseInt(prompt("How many characters? (choose between  8 and 128"));
  
   if (isNaN(characterLength) || characterLength < 8 || characterLength  > 128) {
      alert("You must choose between 8 - 128.");
         return false;
   }
    if (confirm("Would you like to include lower case letters?")) {
    choice = choice.concat(lowerCase);
    }
    if(confirm("Would you like to include upperr case letters?")) {
    choice = choice.concat(upperCase);
    }
    if(confirm("Would you like to include numbers?")) {
    choice = choice.concat(number);
    }
     if(confirm("Would you like to include special characters?")) {
     choice = choice.concat(symbol);
 }
    return true;

}