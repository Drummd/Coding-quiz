let quizStart = document.getElementById("quizStart")
let questionHeading = document.getElementById("questionHeading")
let answersList = document.getElementById("answers")
let highScores = (localStorage.getItem("highScores") === null) ? [] : JSON.Parse(localStorage.get("highScores"))

var count = 75;


let quizData = [
    {
        question: "What is the first index of an array?",
        answers: [[1, 0], [0, 1], [2, 0], ["first", 0]]
    },
    {
        question: "What is the last index of an array?",
        answers: [[1, 0], [0, 0], [2, 0], ["array.length - 1", 1]]
    },
    {
        question: "Which symbol is a equality operator?",
        answers: [["===", 1], ["%", 0], [">=", 0], ["!==", 0]]
    },
    {
        question: "What symbol is needed for an array to take place?",
        answers: [[":", 0], ["//", 0], ["[]", 1], ["()", 0]]
    },
    {
        question: "CSS is used for what on a website?",
        answers: [["styling", 1], ["structure", 0], ["back-end sevices", 0], ["not used at all", 0]]
    },
    {
        question: "Which symbol starts a string?",
        answers: [[";", 0], ["*", 0], ["#", 0], ["'", 1]]
    }
];
var quizEntry
let correctScores = 0
let totalScores = quizData.length

    
function readQuestion(heading, list) {
    
     quizEntry = quizData.shift()
heading.innerHTML = quizEntry.question
for (let i = 0 ; i < quizEntry.answers.length; i++) {
    let answer = quizEntry.answers[i]
    console.log(answer)
    let entry = document.createElement("li")
    console.log(entry)
    entry.innerHTML = answer[0]

    entry.dataset.correct = answer[1]

    entry.addEventListener("click", function (event) {
        list.innerHTML = ""
        if (event.target.dataset.correct == 1) {
            correctScores++
            console.log("CORRECT!")
        }
        else {
            console.log("Incorrect")
        }
        if (quizData.length > 0)
            readQuestion(heading, list);
        else {
            heading.innerHTML = correctScores + "/" + totalScores
        }
        
    })
    list.append(entry)
};
    };

quizStart.addEventListener("click", function (event) {
        event.target.remove()
        readQuestion(questionHeading, answersList)
        var interval = setInterval(function(){
    count--;
  document.getElementById('count').innerHTML=count;
  if (count <= 0){
    console.log(count)
    clearInterval(interval);
    document.getElementById('count').innerHTML='Sorry time is up!';
    // or...
    alert("You're out of time!");
  }
}, 1000);
})

    
