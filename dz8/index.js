const inputFirst = document.querySelector(".enter-firstValue");
const inputSecond = document.querySelector(".enter-secondValue");
const select = document.querySelector(".choose-operator");
const button = document.querySelector(".count-button");
const result = document.querySelector(".result");

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
}

const checkIsValidValue = (...args) => args.some((value) => value === null || value === "" || isNaN(value));

const buttonClick = () => {
    const isValidValue = checkIsValidValue(inputFirst.value, inputSecond.value);

    if (isValidValue) {
        result.textContent = "Values is not correct";
    } else {
        const firstValue = Number(inputFirst.value);
        const secondValue = Number(inputSecond.value);
        const operator = select.value;

        result.textContent = `${firstValue} ${operator} ${secondValue} = ${operators[operator](firstValue, secondValue)}`;
    }
}

button.addEventListener("click", buttonClick);

