// code by webdevtrick (https://webdevtrick.com)
function Quiz(questions) {
    this.score = 0;
    this.questions = questions.sort(()=>Math.random()-.5);
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("The ratio of width of our National Flag to its length is?", ["3:5", "2:3","6:5", "2:2"], "2:3"),
    new Question(" 'Dandia' is a popular dance of?", ["Punjab", "Gujarat", "Tamil Nadu", "Maharashtra"], "Gujarat"),
    new Question(" In India which period is Summer Season:", ["Feb to March", "March to June", "Middle of June to October", "April to August"], "April to August"),
    new Question("In which of the following festivals are boat races a special feature?", ["Rongali Bihu", "Onam", "Pongal", "Navaratri"], "Onam"),
    new Question("The constituent Assembly was set up in:", ["1947", "1950", "1946", "1945"], "1946"),
    new Question("Who was the second Chairman of constituent Assembly?", ["P. upendra", "DR.B.R.Ambedkar", "DR. Rajendra Prasad", "Lal Bahadur Shastri"], "DR.B.R.Ambedkar"),
    new Question("Where did British first open their factories in Eastern part of India?", ["Assam", "Orissa", "Bihar", "Sikkim"], "Orissa"),
    new Question("The first session of the All India Congress Held in Bombay in 1920, was presided over by", ["J.L. Nehru", "VV Giri", "Lala Lajpat Rai", "MM Joshi"], "Lala Lajpat Rai"),
    new Question("Which of the following rivers does not flow into the Arabian Sea?", ["Tungabhadra", "Sabarmati", "Mandovi", "Narmada"], "Tungabhadra"),
    new Question(" Tropic of Cancer passes through which of the following Indian States:", ["Kerala", "Rajasthan", "Bihar", "Andhra Pradesh"], "Rajasthan")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 