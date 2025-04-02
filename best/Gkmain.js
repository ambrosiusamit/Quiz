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
    new Question("The language spoken by the people by Pakistan is?", ["Hindi", "Palaun","Sindhi", "Nauruan"], "Sindhi"),
    new Question("The World Largest desert is?", ["Sahara", "kalahari", "Thar", "Sonaran"], "Sahara"),
    new Question("The metal whose salts are sensitive to light is?", ["Zinc", "Silver","Copper", "Aluminum"], "Silver"),
    new Question("Mount Everest is located in?", ["India", "Nepal", "Tibet", "China"], "Nepal"),
    new Question("Which soil is suitable for agriculture?", ["Red Soil", "Sand", "Black Soil", "Peaty Soil"], "Peaty Soil"),
    new Question("The device used for measuring altitudes is?", ["Altimeter", "Ammeter", "Audiometer", "Galvanometer"], "Altimeter"),
    new Question("The Gate way of India is?", ["Chennai", "Mumbai", "Kolkata", "New Delhi"], "Mumbai"),
    new Question("The first chairman of the Atomic Energy Commission was?", ["Dr.C.V.Raman", "Dr.H.J.Bhabha", "Dr.A.P.J.Abdul kalam", "Dr.Vickram Sarabhai"],"Dr.H.J.Bhabha"),
    new Question("Which is considered as the biggest port of India?", ["Kolkata", "Cochin", "Mumbai", "Chennai"], "Mumbai"),
    new Question("The chief ore of Aluminium is?", ["Iron", "Bauxite", "Cryolite", "Haematite"], "Bauxite")
    
  
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 