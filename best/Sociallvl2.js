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
   new Question("Which is considered as the most ancient part of the world by historians?", ["Gangetic Valley", "Southern part of Vindhya Mountain", "North Western Indian Valley", "North Eastern part of India"], "Southern part of Vindhya Mountain"),
    new Question("The reign of Chandragupta Mauriya", ["B.C. 261-236", "B.C. 280-255", "B.C. 324-299", "B.C. 298-273"], "B.C. 324-299"),
    new Question("The person who established British rule in India", ["Robert Clive", "Duplex", "Hestings", "Mirjafer"], "Robert Clive"),
    new Question("The official language of Pallavas was:", ["Tamil", "Sanskrit", "Pali", "Kharosti"], "Sanskrit"),
    new Question("In India, the National Human Rights Commission was established in the year", ["1993", "1991", "1983", "1867"], "1993"),
    new Question("The person who was named as 'Tiger of Mysore':", ["Tipu Sultan", "Sabdar Ali", "Fadek Hyder", "Hyder Ali"], "Tipu Sultan"),
    new Question("'Siravasthi' means", ["Town", "Village", "Temple", "Holy Book"], "Town"),
    new Question("Which Ocean has one third of land surface in the world", ["Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Atlantic Ocean"], "Pacific Ocean"),
    new Question("The science of constructing map is called", ["Cartography", "Demography", "Geography", "Topography"], "Cartography"),
    new Question(" The Article which deals with 'Education for All':", ["Article 41", "Article 43", "Article 44", "Article 45"], "Article 45")

];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 















