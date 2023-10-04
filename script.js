const table = {
    "É mamífero?": {
        "Sim": {
            "É quadrúpede?": {
                "Sim": "Leão",
                "Não": "Macaco"
            }
        },
        "Não": "Pássaro"
    },
    "É carnívoro?": {
        "Sim": "Leão",
        "Não": "Macaco"
    }
};

let currentQuestion = "É mamífero?";

const questionElement = document.getElementById("question");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const resultElement = document.getElementById("result");

function displayQuestion() {
    questionElement.textContent = currentQuestion;
}

function displayResult(animal) {
    resultElement.textContent = `Então é o ${animal}`;
}

displayQuestion();

yesButton.addEventListener("click", () => {
    if (typeof table[currentQuestion] === "object") {
        currentQuestion = Object.keys(table[currentQuestion]["Sim"])[0];
        displayQuestion();
    } else {
        displayResult(table[currentQuestion]["Sim"]);
    }
});

noButton.addEventListener("click", () => {
    if (typeof table[currentQuestion] === "object") {
        currentQuestion = Object.keys(table[currentQuestion]["Não"])[0];
        displayQuestion();
    } else {
        displayResult(table[currentQuestion]["Não"]);
    }
});