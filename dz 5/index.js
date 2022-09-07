function checkOperator(operator) {
    return (operator === "+" || operator === "-" || operator === "*" || operator === "/");
}

function getCheckedOperator(symbol) {
    let correctSymbol = symbol;

    while (!(checkOperator(correctSymbol))) {
        correctSymbol = prompt("try again");
    }

    return correctSymbol;
}


const symbol = prompt('Choose the operator from +, - , *, /')

const checkedSymbol = getCheckedOperator(symbol);

function getCheckedValuesArray(answer) {
    let splintedAnswer = answer ? answer.split(",") : null;

    while (splintedAnswer === null || !splintedAnswer.length || splintedAnswer.some((el) => isNaN(Number(el)))) {
        const promptAnswer = prompt("Try again");
        splintedAnswer = promptAnswer ? promptAnswer.split(",") : null
    }

    return splintedAnswer.map((element) => Number(element));
}

const answer = prompt("Enter all numbers through ,");

const checkedValuesArray = getCheckedValuesArray(answer);

const operators = {
    "+": function (a, b) {
        return a + b;
    },
    "-": function (a, b) {
        return a - b;
    },
    "*": function (a, b) {
        return a * b;
    },
    "/": function (a, b) {
        return a / b;
    }
}

function calculate() {
    const fn = operators[checkedSymbol];

    return  checkedValuesArray.reduce((acc, element) => {
        if (acc === null) {
            return element;
        } else {
            return fn(acc, element);
        }
    }, null);
}

alert(`${calculate()}`);
