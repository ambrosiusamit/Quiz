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
    new Question("The highest salinity is found in the waterbody of:", ["Caspian Sea", "Dead Sea", "Van Lake ", "Lake of Uttah"], "Dead Sea"),
    new Question("The local Government in India was initially established by", ["Lord Curzon", "Lord Canning", "Lord Rippon", "Lord Dalhousie"], "Lord Rippon"),
    new Question("Who is known as the Father of Economics", ["Malthus", "Karl Marx", "Adam Smith", "John Marshall"], "Adam Smith"),
    new Question("Which is the nearest planet to the sun in the solar system?", ["Earth", "Mercury", "Mars", "Jupiter"], "Mercury"),
    new Question("The King who was praised as 'Lakh Baksh':", ["Qutub-ud-din-Aibak", "Nasurudeen", "Iltumish", "Balban"], "Qutub-ud-din-Aibak"),
    new Question("The Atmospheric layer responsible for weather changes:", ["Stratosphere", "Ionosphere", "Troposphere", "Exosphere"], "Troposphere"),
    new Question("The King who invaded India many a times to capture Punjab before the third Battle of Panipat:", ["Mahamud Ghori", "Ahamed Shah Abdali", "Auranzeb", "Gazani Mohamud"], "Ahamed Shah Abdali"),
    new Question("The Longitude that determines Indian Standard Time passes through the city of:", ["Jaipur", "Visakkapattinam", "Jabblpur", "Allahabad"], "Allahabad"),
    new Question("The constitution of India was adopted by the?", ["Governer General", "British Parliament","Constituent Assembly", "None of the Above"], "Constituent Assembly"),
    new Question("Iconography was introduced by:", ["Later Cholas", "Pallavas", "Cholas", "Later Pallavas"], "Later Cholas")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 


