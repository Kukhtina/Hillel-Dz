function createCalculator(defaultValue) {
    let result = defaultValue;

    return {
        sum: (arg) => result += arg,
        mult: (arg) => result *= arg,
        sub: (arg) => result -= arg,
        div: (arg) => result /= arg,
        set: (arg) => result = arg
    };
}

const calc = createCalculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));
