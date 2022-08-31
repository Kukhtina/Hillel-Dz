const evenArr = [];
const oddArr = [];

function getArraySumString(title, array) {
    let sum = 0;

    array.forEach((el) => {
        sum += el;
    })


    return `Sum ${title}:${array.length > 1 ? ` ${array.join("+")} =` : ""} ${sum}`;
}

function displayEvenOddSum(value) {
    let correctValue = Number(value);

    while (isNaN(correctValue) || correctValue <= 0) {
        const promptResult = prompt("Try again");
        correctValue = Number(promptResult);
    }

    if (correctValue % 2 === 0) {
        evenArr.push(correctValue);
    } else {
        oddArr.push(correctValue);
    }

    const sumEvenString = getArraySumString("even", evenArr);
    const sumOddString = getArraySumString("odd", oddArr);

    alert(`${sumEvenString}\n\n${sumOddString}`)
}

while ((evenArr.length + oddArr.length) < 10) {
    const answer = prompt("Enter the value");
    displayEvenOddSum(answer);
}

alert("You entered 10 elements, it's enough!")

