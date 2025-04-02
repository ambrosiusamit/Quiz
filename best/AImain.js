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
var questions =[
    new Question("Which one is the first Search  Engine?", ["Google", "Archie","Altavista", "WAIS"], "Archie"),
    new Question("Which of the following programming language is used to create programs like applets?", ["C laguage","Java", "JavaScript", "BASIC"], "Java"),
    new Question("First computer virus is known as:", ["Rabbit", "Creeper Virus","Elk Cloner", "SCA Virus"], "Creeper Virus"),
    new Question("Which of the following is not an operating system?",["DOS", "Mac", "C", "Linux"], "C"),
    new Question("Which of the following is not a database management software?", ["MySQL", "Oracle", "Sybase", "COBOL"], "COBOL"),
    new Question("Number of layers in the OSI(Open Systems Interconnection)Model?", ["9", "2", "7", "11"], "7"),
    new Question("1024 bit is equal to how many byte?", ["1 Byte", "128 Byte", "32 Byte", "64 Byte"], "128 Byte"),
    new Question("Where is the headquter of Microsoft office located?", ["Texas", "NewYork", "California", "Washinton"], "Washinton"),
    new Question(".gif is an extension of:", ["Image file", "Video file", "Audio file", "Word file"], "Image file"),
    new Question("Computer Hard Disk was first introduced in 1956 by:", ["Dell", "Apple", "Microsoft", "IBM"], "IBM")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 