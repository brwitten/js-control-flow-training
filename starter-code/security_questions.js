console.log("security_questions.js loaded");

var securityQuestions = [
  {question: "What is your favorite sport?", expectedAnswer: "Field hockey"},
  {question: "What is your favorite color?", expectedAnswer: "green"},
  {question: "Cats or dogs?", expectedAnswer: "both!"}
];

console.log("security array is set");

var arrayLength = securityQuestions.length;
console.log(arrayLength);

for (var i = 0; i <= arrayLength; i++) {
    //alert(myStringArray[i]);
    prompt(question);
    break;
}
