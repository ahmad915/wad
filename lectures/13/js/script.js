var questions = [{
    question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices: ["The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer: 0
}, {
    question: "Which of the following can't be done with client-side JavaScript?",
    choices: ["Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer: 2
}, {
    question: "Using _______ statement is how you test for a specific condition",
    choices: ["select",
        "if",
        "for",
        "none of the above"],
    correctAnswer: 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
var count=1;
var count1=0;

function displayNext() {

    document.getElementById("question").innerHTML = questions[count].question;

    var ul = document.getElementById("choice-list");
    ul.classList.add("list-group");

    ul.innerHTML="";

    for (count1 = 0; count1 < 4; count1++) {

        var li = document.createElement('li');
        li.innerHTML = '<input type="radio" name="choice" value="'+count1+'">'+questions[count].choices[count1];
        ul.appendChild(li);
    }
    count++;
}

function displayCurrentQuestion() {
    document.getElementById("question").innerHTML = questions[0].question;

    var ul = document.getElementById("choice-list");
    ul.classList.add("list-group");

    for (var count1 = 0; count1 < 4; count1++) {

        var li = document.createElement('li');
        li.innerHTML = '<input type="radio" name="choice" value="'+count1+'">'+questions[0].choices[count1];
        ul.appendChild(li);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}

function hideScore() {
    document.getElementById("result").style.display = 'none';
}