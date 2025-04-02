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
    new Question("When did Sikkim cede(give) Darjeeling to the British?",["1935","1838","1855","1835"],"1835"),
    new Question("Which country is to the west of Sikkim?",["Indonesia","Burma","Nepal","China"],"Nepal"),
    new Question("Which is the major river of Sikkim?",["Teesta","Rangeet","Burma","None of these"],"Teesta"),
    new Question("Where do the river Lachen Chu and Lachung Chu meet?",["Chungthang","Yangyang","Yumthang","None of these"],"Chungthang"),
    new Question("Sikkim also has a plateau. In which district it is located?",["North","South","East","West"],"North"),
    new Question("Name the largest glacier of Sikkim?",["Zemu Glacier","Siachen Glacier","Baltoro Glacier","Sperry Glacier"],"Zemu Glacier"),
    new Question("Which is the nearest railway station to Sikkim?",["Ghum","New Jalpaiguri","Achalda","Abohar"],"Ghum"),
    new Question("Which is the smallest district in Sikkim?",["North","South","West","East"],"South"),
    new Question("What does Sukhim in Limbu Language mean?",["New House","River","Nature","Culture"],"New House"),
    new Question("Temi Tea garden is located in:",["North District","South District","West District","East District"],"South District")
	
	  
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
	
	