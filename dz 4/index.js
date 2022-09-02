function getOperand(operand) {
    let correctOperand = Number(operand);

    while (isNaN(correctOperand) || correctOperand <= 0) {
        const promptResult = prompt("Try again");
        correctOperand = Number(promptResult);
    }

    return correctOperand;
}

function checkIsCorrectSymbol (symbol) {
    return (symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/");
}

function getCheckedSymbol(answer) {
    let correctSymbol = answer;

    while (!checkIsCorrectSymbol(correctSymbol)) {
        correctSymbol = prompt("Try again");
    }

    return correctSymbol;
}

let symbol = prompt("Choose a symbol +, -, *, /");
symbol = getCheckedSymbol(symbol);

let valuesCount = prompt("How many numbers you want to enter?");
valuesCount = getOperand(valuesCount);

let answers = [];

while (answers.length < valuesCount) {
    let answer = prompt(`Enter the number ${answers.length + 1}`);
    answer = getOperand(answer);

    answers.push(Number(answer));
}

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
}

function calculate(operator) {
    const fn = operators[operator];

    let count = answers[0];

    for (let i = 1; i < answers.length; i++) {
        count = fn(count, answers[i]);
    }

    return count;
}

if (checkIsCorrectSymbol(symbol)) {
    alert(`${answers.join(symbol)} = ${calculate(symbol)}`)
} else {
    alert("Sorry, something went wrong");
}






