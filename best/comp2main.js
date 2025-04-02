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
    new Question("A folder in windows computer can't be made with the name?", ["Can", "Con","Mak", "Make"], "Con"),
    new Question("A coumpter use which type of number system to calculate and to store data?", ["Decimal", "Octal", "Binary", "Hexadecimal"], "Binary"),
    new Question("What is the extension type of the excel 2007 files?", [".xls", ".xlsx",".xsl", "None of the above"], ".xlsx"),
    new Question("The basic units of a excel spreedsheet where we enter data is called ?", ["Tab", "Box", "Cell", "None of above"], "Cell"),
    new Question("Which one is a 'text editor'for Microsoft Windows?", ["MS Word", "MS Excel",  "WordPad", "Notepad"], "Notepad"),
    new Question("Which one is the default 'Word Proccessor' for Microsoft Windoows?", ["MS Word", "Ms Paint", "WordPad", "Notepad"], "WordPad"),
    new Question("Total number of function keys in a computer keyboard?", ["10", "12", "14", "8"], "12"),
    new Question("Which one is the latest release of Windows Clinet Operating System?", ["Windows XP", "Windows 7", "Windows 8", "Windoows 10"],"Windoows 10"),
    new Question("'Linux, is an example of?", ["Software", "Application", "Operating System", "Browser"], "Operating System"),
    new Question("Which one of the following is not a computer language?", ["BASIC", "LOTUS", "C++", "JAVA"], "LOTUS"),
    new Question("Which one is used for making presentation file from Microsoft Office package?", ["MS Outlook", "MS Excel", "MS Word", "MS Powerpoint"], "MS Powerpoint"),
    new Question("Which web browser is developed by the Google?", ["IE", "FireFox", "Safri", "Chrome"], "Chrome"),
    new Question("Which web browser is provided default with a Windoows machine?", ["Opera", "IE", "Chrome", "Mosaic"], "IE"),
    new Question("The main page of a Web site is known as?", ["Home page", "Book mark page", "Content page", "Navigator page"], "Home page"),
    new Question("What is the full form of PDF?", ["Pinted Document Format", "Public Document Format", "Portable Document Format", "Published Document Format"], "Portable Document Format"),
    new Question("A hyperlink means?", ["Text connected to page", "Plain text", "Coloured text", "None of the above"], "Text connected to page"),
    new Question("ORACLE is a?", ["Operating System", "RDBMS", "Interprete", "Compiler"], "RDBMS"),
    new Question("Error in computer programmes aer called?", ["Follies", "Mistake", "Bugs", "Spam"], "Bugs"),
    new Question("Virus is a computer?", ["File", "Database", "Network", "Program"], "Program"),
    new Question("UPS stands for?", ["Universal Power Supply", "Universal Power Source", "Uninterruptible Power standby", "Uninterruptible Power Supply"], "Uninterruptible Power Supply")

];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
 