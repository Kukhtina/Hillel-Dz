function Calculator(arg) {
    this.result = arg;

    this.sum = function (arg) {
        return this.result = this.result + arg;
    };

    this.mult = function (arg) {
        return this.result = this.result * arg;
    };

    this.sub = function (arg) {
        return this.result = this.result - arg;
    };

    this.div = function (arg) {
        return this.result = this.result / arg;
    };

    this.set = function (arg) {
        return this.result = arg;
    };
}

const calc = new Calculator(10);

calc.sum(5);
calc.mult(10);
calc.sub(40);
calc.div(10);
calc.set(100);
