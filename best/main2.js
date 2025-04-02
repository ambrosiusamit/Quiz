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
    new Question("What type of energy is needed for photosynthesis to happen?", ["Heat", "Light","Electrical", "Sand"], "Light"),
    new Question(" Which one is a naturaly occuring noble gas?", ["Argon", "Oxygen", "Carbon dioxide", "Carbon monoxide"], "Argon"),
    new Question(" Which of the following is a large blood vessel that carries blood away from the heart?", ["Artery", "Capillary","Nerve", "Vein"], "Artery"),
    new Question("Fungi are plants that lack:", ["Oxygen", "Carbon dioxide", "Chlorophyll", "None of these"], "Chlorophyll"),
    new Question("What makes a reptile a reptile?", ["Cold Booded", "Egg-laying", "Warm Blooded", "Non-Hearing"], "Egg-laying"),
    new Question("Bio-chemical compounds are used as....", ["Food preservatives", "Skin Treatments", "Cooking Oils", "All of the above"], "All of the above"),
    new Question(" Name any biodegradable agent?", ["Aluminum cans", "Domestic sewage", " Metal scraps", "Plastic material"], "Domestic sewage"),
    new Question(" In what SI unit power of lenses is rated?", ["Dioptre", "power", "Ampere", "Kelvin"], "Dioptre"),
    new Question("The process of taking food into the body is called?", ["Ingestion", "Digestion", "Assimilation", "Absorption"], "Ingestion"),
    new Question(" Which gas is needed for photosynthesis?", ["Hydrogen", "Oxygen", "Argon", "Carbon dioxide"], "Carbon dioxide")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 