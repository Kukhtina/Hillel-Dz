function checkValue(answer) {
    let correctAnswer = answer;

    while (isNaN(Number(correctAnswer))) {
        correctAnswer = prompt("Try again");
    }

    return correctAnswer;
}

let firstValue = prompt("Enter the first value");
firstValue = checkValue(firstValue);

let secondValue = prompt("Enter the second value");
secondValue = checkValue(secondValue);

const symbols = prompt("Choose a symbol +, -, *, /");

switch (symbols) {
    case "+":
        alert(`${firstValue} + ${secondValue} = ${Number(firstValue) + Number(secondValue)}`);
        break;
    case "-":
        alert(`${firstValue} + ${secondValue} = ${Number(firstValue) - Number(secondValue)}`);
        break;
    case "*":
        alert(`${firstValue} + ${secondValue} = ${Number(firstValue) * Number(secondValue)}`);
        break;
    case "/":
        alert(`${firstValue} + ${secondValue} = ${Number(firstValue) / Number(secondValue)}`);
        break;
    default:
        alert("Sorry, your choose is invalid");
}
