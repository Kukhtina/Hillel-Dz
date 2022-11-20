
const add = (...arguments) => {

    if (arguments.some((el) => el === undefined || el === null || typeof el === "string")) {
        return "Some arguments is invalid";
    }else if (arguments.length === 0){
        return "Enter at least one argument"
    }
    return arguments.reduce((acc, el) => {
        return acc + el;

    }, 0);
}

module.exports = add;
