//Section Elements
var startScrn = document.getElementById('start-screen');
var questions = document.getElementById('questions');
var choices = document.getElementById('choices');
var endScreen = document.getElementById('end-screen');
var body = document.body

//Button Elements
var startBtn = document.getElementById('start-button');
var aBtn = document.getElementById('ansA');
var bBtn = document.getElementById('ansB');
var cBtn = document.getElementById('ansC');
var dBtn = document.getElementById('ansD');
var submit = document.getElementById('submit');

//Text Elements
var qTitle = document.getElementById('question-title');
var qCode = document.getElementById('qCode');
var qResult = document.getElementById('qResult');
var finalScore = document.getElementById('final-score')
// var userName = 
//Questions Array
var questionsList = [
    { //1
        question: 'In this code, what has the value of "2"',
        qCode: 'function myFunction(x, y) {return x + y}; \n myFunction(2, 7)',
        answerA: 'Reference',
        answerB: 'Argument', //correct
        answerC: 'Parameter',
        AnswerD: 'Method',
        correctAns: 'B'
    },

    { //2
        question: 'Which loop is best suited towards iterating over an array?',
        qCode: '',
        answerA: 'For In',
        answerB: 'While',
        answerC: 'For of', //correct
        AnswerD: 'do/while',
        correctAns: 'C'
    },

    { //3
        question: 'Which of the following is the correct syntax?',
        qCode: '',
        answerA: 'var X = "template literal string $(X, Y)',
        answerB: 'var X = `template literal string ${Y} ${Z}`', //correct
        answerC: 'var X = `template literal string` `X`, `Y`',
        AnswerD: 'var X = "template literal string {X Y}',
        correctAns: 'B'
    },

    { //4
        question: 'What does the acronym DOM stand for',
        qCode: '',
        answerA: 'Digital Organization Mockup',
        answerB: 'Direct Object Management',
        answerC: 'Document Object Model', //correct
        AnswerD: 'Dubious Old Man',
        correctAns: 'C',
        bonus: 'D'
    },

    { //5
        question: 'Which of the following matches the resulting array?',
        qCode: "var colours = ['blue', 'orange', 'mauve', 'red']; colours.splice(2, 1, 'green', 'grey')",
        answerA: "var colours = ['blue', 'orange', 'mauve', 'red', 'green', 'grey']",
        answerB: "var colours = ['blue', 'orange', 'green', 'grey', 'red']", //correct
        answerC: "var colours = ['blue', 'green', 'grey', 'red']",
        AnswerD: "var colours = ['green, 'grey', 'blue', 'orange', 'mauve', 'red']",
        correctAns: 'B'
    },

    { //6
        question: 'An Object saved to local storage is saved as what?',
        qCode: '',
        answerA: 'Object',
        answerB: 'Array',
        answerC: 'String', //correct
        AnswerD: 'Variable',
        correctAns: 'C'
    },

    { //7
        question: 'Which of the following best describes "Persistent Data"?',
        qCode: '',
        answerA: 'Data that is stored in the browser indefinately', //correct
        answerB: 'Data that persistenytly updates based on certain criteria',
        answerC: 'Data that keeps asking for the same thing',
        AnswerD: 'Data that cannot be removed or edited',
        correctAns: 'A'
    },
    { //8
        question: 'Which of the following methods would you use to effect the third list item?',
        qCode: '',
        answerA: 'document.getElementsByClassName("listItem")[3]',
        answerB: 'document.getElementsByClass("3")',
        answerC: 'document.getElementsByID("3")',
        AnswerD: 'document.getElementByID("3")', //correct,
        correctAns: 'D'
    },

]

//Time
var timeLeft = document.getElementById('time');
var minute = 60000;
var second = 1000;
var totalTime = questionsList.length * (12 * second);
timeLeft.innerText = totalTime / 1000;

//Misc
var Q7_Code = document.getElementById('Q7_Code');
var count = 0;   //Question counter
var incorrectAU = document.getElementById('incorrectAU');
var correctAU = document.getElementById('correctAU');
var userScore = 0;




// Next Question
choices.addEventListener('click', function () {
    count++;
    // console.log(count);
    setTimeout(loadQ, 500);
    console.log(count)

}
)

// Start Quiz 
startBtn.addEventListener('click', function () {
    startScrn.setAttribute('style', 'display:none;');
    questions.setAttribute('style', 'display:block;');
    loadQ();
    var countdown = setInterval(function () { //WORKING COUNTDOWN
        totalTime -= second;
        timeLeft.innerText = totalTime / 1000;

        // console.log(totalTime);
        if (totalTime / 1000 == -1) {
            clearInterval(countdown);
            // timeUp()
            timeLeft.innerText = 0;
        }
    }, 1000)

}
)
function quizEnd() {
    questions.setAttribute('style', 'display:none');
    endScreen.setAttribute('style', 'display:block')

}

// Populate Question HTML
function loadQ() {
    var Q = questionsList[count]
    if (count === questionsList.length) {
        userScore = timeLeft.innerHTML;
        finalScore.innerHTML = userScore;
        localStorage.setItem('userScore', userScore)
        quizEnd();
        console.log(userScore)
    }
    qTitle.innerHTML = Q.question;
    qCode.innerHTML = Q.qCode;
    aBtn.innerHTML = Q.answerA;
    bBtn.innerHTML = Q.answerB;
    cBtn.innerHTML = Q.answerC;
    dBtn.innerHTML = Q.AnswerD;
    if (count === 7) {

        Q7_Code.setAttribute('style', 'display:block')
    } else {
        Q7_Code.setAttribute('style', 'display:none')
    }
}
// console.log(questionsList.length, 'length out LoadQ');
//     console.log(count, 'count out LoadQ');
// Buttons
aBtn.addEventListener('click', function () {

    if (questionsList[count].correctAns === 'A') {
        correct();
    } else {
        incorrect();
    }
})
bBtn.addEventListener('click', function () {
    if (questionsList[count].correctAns === 'B') {
        correct();
    } else {
        incorrect();
    }
})
cBtn.addEventListener('click', function () {
    if (questionsList[count].correctAns === 'C') {
        correct()
    } else {
        incorrect()
    }
})
dBtn.addEventListener('click', function () {
    if (questionsList[count].correctAns === 'D') {
        correct()
    } else {
        incorrect()
    }
    if (questionsList[count].bonus === 'D') {
        oldMan()
    }
})
// correct()
function correct() {
    qResult.innerHTML = 'Nailed it!';
    correctAU;
}
//incorrect()
function incorrect() {
    qResult.innerHTML = 'Bad luck!';
    totalTime -= (10 * second);
    incorrectAU.onplay
}


function timeUp() {
    alert("Time's UP!")

}


// Easter Egg(s)
function oldMan() {
    alert('I am an old man');
    totalTime += 20 * second;
    qResult.innerHTML = 'Old Man Bonus! Extra 10 seconds!'
}