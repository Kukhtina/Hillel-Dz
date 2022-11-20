const mult = (...arguments) => {
    if (arguments.some((el) => el === undefined || el === null || typeof el === "string")) {
        return "Argument is invalid";
    }else if (arguments.length === 0){
        return "Enter the argument"
    }
    return arguments.reduce((acc, el) => {
        return acc * el;
    }, 1);
}

module.exports = mult;
