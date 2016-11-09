var quizzes = [
  ['How many states are in the United States?', 50],
  ['How many legs does an insect have?', 7],
  ['How many continents are there?', 6]
  ];

var correct = [];
var wrong = [];

var correctAnsCount = 0;
var question;
var answer;
var response;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1){
      listHTML += '<li>' + arr[i] + '</li>';
    }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < quizzes.length; i += 1){
  question = quizzes[i][0];
  answer = quizzes[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer){
    correctAnsCount += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = "You got " + correctAnsCount + " question(s) right."
html += "<h2>You got these questions correct:</h2>";
html += buildList(correct);
html += "<h2>You got these questions wrong:</h2>";
html += buildList(wrong);


print(html);
