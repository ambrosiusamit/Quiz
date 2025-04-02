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
    new Question("Which one is the largest exporter of tea in the world", ["India", "China", "Sri Lanka", "kenya"], "China"),
    new Question("The costliest metal of the world is", ["Endohedral Fullerene", "Californium 252", "Tritium", "Rhodium"], "Rhodium"),
    new Question("Which one of the following countries has been the largest producer of copper", ["China", "Uruguay", "Brazil", "Chile"], "Chile"),
    new Question("Through which of the following straits does a tunnel connect the United Kingdonm and France", ["Davis Strait", "Denmark Strait", "Strait of Daver", "Strait of Gibralter"], "Strait of Gibralter"),
    new Question("The coastal areas of which of the follwing oceans are called 'ring of fire'", ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "None of the above"], "Pacific Ocean"),
    new Question("The largest producer of peanuts in the world is",["China", "India", "Nigeria", "Russia"], "China"),
    new Question("Which nation has the largest cattle inventory in the world", ["Denmark", "China", "Pakistan", "India"], "India"),
    new Question("Which two countries are separated by the McMahon Line", ["india and Pakistan", "India and China", "India and Bangladesh", "Tibet and China"], "India and China"),
    new Question("Which one is the higest population density country in Asia",["India","Bangladesh","China","Singapore"], "Singapore"),
    new Question("Which one is the largest castor oil producing country in the World", ["China", "India", "USA","Japan"], "India")
	
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 	
	