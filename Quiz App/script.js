const quizData = [
    {
        question: "Gollum leads Frodo into the lair of what creature?",
        a: "Shelob",
        b: "A Balrog",
        c: "The Nazgul",
        d: "Orcs",
        correct: "a",
    },
    {
        question: "What species is Gollum?",
        a: "Orc",
        b: "Goblin",
        c: "Hobbit",
        d: "Elf",
        correct: "c",
    },
    {
        question: "The Lord of the Rings begins celebrating what?",
        a: "The New Year",
        b: "Merry's Birthday",
        c: "Gandalf's arrival",
        d: "Bilbo's Birthday",
        correct: "d",
    },
    {
        question: "Who is named a Knight of Rohan following their heroic deeds?",
        a: "Aragorn",
        b: "Pippin Took",
        c: "Merry Brandybuck",
        d: "Frodo Baggins",
        correct: "c",
    },
    {
        question: "Who is Elessar?",
        a: "Gandalf",
        b: "Boromir",
        c: "Legolas",
        d: "Aragorn",
        correct: "d",
    },
    {
        question: "Who defeats the Witch-King of Angmar?",
        a: "Merry",
        b: "Gandalf",
        c: "Faramir",
        d: "Eowyn",
        correct: "d",
    },
    {
        question: "The hobbits first encounter Strider in an inn in Bree. What's the name of the inn?",
        a: "The Husky Horse",
        b: "The Three Broomsticks",
        c: "The Prancing Pony",
        d: "The Merry Mule",
        correct: "c",
    },
    {
        question: "What is the name of Gandalf's horse?",
        a: "Windfola",
        b: "Hasufel",
        c: "Gullfaxi",
        d: "Shadowfax",
        correct: "d",
    },
    {
        question: "How many members make up the fellowship of the ring?",
        a: "Seven",
        b: "Eight",
        c: "Nine",
        d: "Ten",
        correct: "c",
    },
    {
        question: "How is the ring destroyed at Mount Doom?",
        a: "Sam drops it into the lava",
        b: "Frodo drops it into the lava",
        c: "Gollum drops with it into the lava",
        d: "An eagle drops it into the lava",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick = "location.reload()">Reload</button>
            `
        }
    }
})