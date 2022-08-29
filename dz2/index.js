function queryCheckValue(answer) {
    let correctAnswer = Number(answer);

    while (isNaN(correctAnswer)) {
        correctAnswer = prompt("Try again");
    }

    return correctAnswer;
}

let firstValue = prompt("Enter the first value");
firstValue = queryCheckValue(firstValue);

let secondValue = prompt("Enter the second value");
secondValue = queryCheckValue(secondValue);

function checkSymbol(answer) {
    let correctSymbol = answer;

    while (!(correctSymbol === "+" || correctSymbol === "-" || correctSymbol === "*" || correctSymbol === "/")) {
        correctSymbol = prompt("Try again");
    }

    return correctSymbol;
}

let symbol = prompt("Choose a symbol +, -, *, /");
symbol = checkSymbol(symbol);

switch (symbol) {
    case "+":
        alert(`${firstValue} + ${secondValue} = ${firstValue + secondValue}`);
        break;
    case "-":
        alert(`${firstValue} + ${secondValue} = ${firstValue - secondValue}`);
        break;
    case "*":
        alert(`${firstValue} + ${secondValue} = ${firstValue * secondValue}`);
        break;
    case "/":
        alert(`${firstValue} + ${secondValue} = ${firstValue / secondValue}`);
        break;
    default:
        alert("Sorry, something went wrong");
}


