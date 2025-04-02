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
     
	
    new Question("The Disaster Management Act was enacted in India in the year", ["2003", "2005", "2006", "2009"], "2005"),
    new Question("The headquarters of Wester Air Command  of Indian Air Force is located at", ["Nagpur", "Mumbai", "Jodhpur", "New Delhi"], "New Delhi"),
    new Question("The aircraft carrier Admiral Gorshkov which was brought by India from Russia is renamed as", ["INS Godavari", "INS Trishul", "INS Vikramaditya", "IAS Trishul"], "INS Vikramaditya"),
    new Question("How many States in India have Legislative Council(Vidhan parished)", ["7", "12", "15", "21"], "7"),
    new Question("Which industry in India is the  maximum consumer of water", ["Textile", "Engineering", "Paper and Pulp", "Thermal Power"], "Thermal Power"),
    new Question("The National Police Acedemy is located at", ["Abu Road", "Dehradum", "Hyderabad", "Bangalore"], "Hyderabad"),
    new Question("In which state is Kudankulam Nuclear Plant is located", ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu"], "Tamil Nadu"),
    new Question("Which two states are connected by the Palakkad Gap", ["Tamil Nadu and Kerala", "Tamil and karnataka", "Karnataka and Andhra Pradesh", "Kerala and Maharastra"], "Tamil Nadu and Kerala"),
    new Question("The Palk Strait separates India from", ["UAE", "Maldives", "Sri lanka", "Pakistan"], "Sri lanka"),
    new Question("The Sariska Wildlife Santuary si situated in the State of", ["Punjab", "Madhya Pradesh", "Andhra Pradesh", "Rajasthan"], "Rajasthan")
	
  
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 	
	
	   
	      