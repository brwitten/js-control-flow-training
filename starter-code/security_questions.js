console.log("security_questions.js loaded");

var securityQuestions = [
  {question: "What is your favorite sport?", expectedAnswer: "Field hockey"},
  {question: "What is your favorite color?", expectedAnswer: "green"},
  {question: "Cats or dogs?", expectedAnswer: "both!"}
];

console.log(securityQuestions[1].question);

var arrayLength = securityQuestions.length;
console.log(arrayLength);

for (var i = 0; i < arrayLength; i++) {
    var userAnswer = prompt(securityQuestions[i].question);
    if (userAnswer != securityQuestions[i].expectedAnswer) {
      alert("Hmm.. that's not right. Goodbye!");
      break;
    };
}
