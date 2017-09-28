console.log("login.js loaded");

var userLogin = { userName:'Brwitten', savedPassword:'password'};

var inputPassword = prompt("Greetings, " + userLogin.userName + ". Please enter your password.");

if (inputPassword == userLogin.savedPassword) {
  alert("Welcome back!")
} else {
  var inputPassword2 = prompt("Hmm... that's not right. Try again.")
} if (inputPassword2 == userLogin.savedPassword) {
  alert("Welcome back!")
} else {
  var inputPassword3 = prompt("Hmm... that's not right. Try one more time.")
}; if (inputPassword3 == userLogin.savedPassword) {
  alert("Welcome back!")
} else {
  alert("Sorry, it doesn't look like this is going to work out.")
};
