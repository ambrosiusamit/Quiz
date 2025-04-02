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
    new Question("Diamond is an allotropic form of?",["Carbon","Hydrogen","Gold","Silver"],"Carbon"),
    new Question("The fluid part of blood is known as?",["Blood Cells","Platelets","Hormones","Plasma"],"Plasma"),
    new Question("The good sources of Vitamin-C are?",["Green leafy vegetable","Seeds","Fresh vegetables and fruits","Sea foods"],"Fresh vegetables and fruits"),
    new Question("The density of water is?",["1g/cm3","1.5g/cm3","2g/cm2","non of these"],"1g/cm3"),
    new Question("A device which converts chemical energy into electrical energy is called?",["Motor","Generator","Moving-coil meter","Battery"],"Battery"),
   /*new	Question("What is the speed of light?",["3*11^8","3*15^10","3*10^8","3*8^12"],"3*10^8"),*/
    new Question("How many bones in human body when adulthood?",["205","210","207","206"],"206"),
    new Question("How many bones are there when the child is born?",["250","260","270","280"],"270"),
    new Question("What is the scientific name of monkey?",["Memosa","Cercopithecidea","Megnifera-Indica","Homo Sapiens"],"Cercopithecidea"),
    new Question("What is the scientific name of mango?",["Ficus","Megnifera-Indica","Cactaceae","Magnoliophyta"],"Megnifera-Indica"),
    new Question("What is the symbol of gold?",["Fe","K","Au","Sl"],"Au")
   
    ];
    
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 