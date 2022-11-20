const div = (...arguments) => {
    if (arguments.some((el) => el === undefined || el === null || typeof el === "string")) {
        return "Argument is invalid";
    }else if (arguments.length === 0){
        return "Enter the argument"
    }
    return arguments.reduce((currentEl, nextEl) => {

        return currentEl / nextEl;
    })
}

module.exports = div;
