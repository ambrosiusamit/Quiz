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
    new Question("Which is the Sikkim State Bird?",["Blood Pheasant","Great Indian Bustard","Poola Pitta","Northen Gashart"],"Blood Pheasant"),
    new Question("Which one is a left tributary river of Teesta?",["Rangeet","Ranghap chhu","Ringyoug chhu","Dik chhu"],"Dik chhu"),
    new Question("In Bangladesh,the Teesta river join with the?",["Ganga River","Gomit River","Brahmaputra River","Mohana River"],"Brahmaputra River"),
    new Question("The Nathu La Pass connects India with?",["China","Bhutan","Nepal","Bangladesh"],"China"),
    new Question("Sikkim become the 22nd state of the India?",["1975","1978","1980","Non of these"],"1975"),
    new Question("Which is the only India State which borders Sikkim?",["Assam","West Bengal","Arunachal","Non of these"],"West Bengal"),
    new Question("Which National Highway links Siliguri to Gangtok?",["11","21","31","10"],"10"),
    new Question("The total number of recognized language in Sikkim is?",["3","5","8","11"],"11"),
    new Question("Who was the first Chief Minister of Sikkim?",["Nar Bahadur Bhandari","B.B Gurung","Kazi Lhendup Dorjee","Pawan Kumar Chamling"],"Kazi Lhendup Dorjee"),
    new Question("The Barsey Rhododendron WildLife Sanchary ia Located at?",["Gujarat","Sikkim","Madhya Pradesh","West Bengal"],"Sikkim")
   
   
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 