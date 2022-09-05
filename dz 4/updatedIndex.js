function getOperand(operand) {
    let correctOperand = Number(operand);

    while (isNaN(correctOperand) || correctOperand <= 0) {
        const promptResult = prompt("Try again");
        correctOperand = Number(promptResult);
    }
    if (!(isNaN(correctOperand) || correctOperand <= 0)) {
        prompt("How many numbers you want to enter?");
    }
    return correctOperand;
}

function checkIsCorrectSymbol(symbol) {
    return (symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/");
}

function getCheckedSymbol(answer) {
    let correctSymbol = answer;

    while (!checkIsCorrectSymbol(correctSymbol)) {
        correctSymbol = prompt("Try again");
    }
    if (checkIsCorrectSymbol(correctSymbol)) {
        prompt("Choose a symbol +, -, *, /");
    }
    return correctSymbol;
}
getCheckedSymbol(symbol);

let answers = [];

while (answers.length < valuesCount) {
    let answer = prompt(`Enter the number ${answers.length + 1}`);
    answer = getOperand(answer);

    answers.push(answer);
}

const operators = {
    "+": function num(a, b) {
        return a + b
    },
    "-": function num(a, b) {
        return a - b
    },
    "*": function num(a, b) {
        return a * b
    },
    "/": function num(a, b) {
        return a / b
    },
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






