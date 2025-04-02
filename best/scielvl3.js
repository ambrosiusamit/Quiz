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
 
     new Question("Who discovered the first periodic table?",["Dimitri Mendeleev","Henry Moseley","John Dalton","John Newlands"],"Dimitri Mendeleev"),
     new Question("Which enzyme is present in saliva?",["Lipases","Amylase","Maltase","Trypsin"],"Amylase"),
     new Question("What is the length of small intestine?",["2.5 m","2.0 m","1.4 m","1.5 m"],"1.5 m"),
     new Question("Which is the smallest gland in human body?",["Pancreas","Heart","Pineal","kidney"],"Pineal"),
     new Question("Who invented light bulb?",["Albert Einstein","General Gramble","James Watt","Thomas Alva Edison"],"Thomas Alva Edison"),
     new Question("Who converted DC power to AC power?",["Nikola Tesla","Newton","Aris Total","None of these"],"Nikola Tesla"),
     new Question("What is the distance between Sun and the Earth?",["149.9 millions","150.6 millions","149.6 millions","150.7 millions"],"149.6 millions"),
     new Question("What is the distance between Moon and the Earth?",["384,400 km","380,400 km","385,450 km","384,412 km"],"384,400 km"),
     new Question("What is the melting point of iron?",["231.9 digree celsius","327.5 digree celsius","1,538 degree celsius","1,428 degree celsius"],"1,538 degree celsius"),
     new Question("What is the boiling point of water?",["100 degree celsius","110 degree celsius","105 degree celsius","120 degree celsius"],"100 degree celsius")
 ];
    
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 
 
 
 
 
 
 
 
 
 
 
 