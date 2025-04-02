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
    new Question("By Which Amendment Sikkim became full state of India?",["36th Amendment","37th Amendment","38th Amendment","39th Amendment"],"36th Amendment"),
    new Question("Which Dynasty Ruled Sikkim in 1642-1975?",["Dogra","Gaekwad","Namgyal","None of These"],"Namgyal"),
    new Question("In Which Year,Pawan Kumar Chamling became the Chief Minister of Sikkim for the first time?",["1991","1994","1998","1990"],"1994"),
    new Question("In Which River Teesta-V(NHPC) Dam is situated?",["Teesta","Tapti","Godawari","Ganga"],"Teesta"),
    new Question("In which year,the indo-Sikkimese Treaty was signed?",["1975","1950","1980","1970"],"1950"),
    new Question("Which one is recognized as the state animal of Sikkim?",["Red Panda","Snow Leopard","Gayal","None of the above"],"Red Panda"),
    new Question("Sikkim is the largest exporter of?",["Cardamom","Bamboo","Chilly","None"],"Cardamom"),
    new Question("In Bangladesh,the Teesta river join with the:",["Ganga river","Gomti river","Brahmaputra river","Mohana river"],"Brahmaputra river"),
    new Question("Which one is the largest Buddhist monastery in Sikkim?",["Rumtek Monastery","Phodang Monastery","Pemayangtse Monastery","Enchey Monastery"],"Rumtek Monastery"),
    new Question("Which is the highest point in Sikkim?",["Nanda Devi","Kamet","Kangto","Kanchenjunga"],"Kanchenjunga"),
  
   
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();