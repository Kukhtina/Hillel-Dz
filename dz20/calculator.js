const add = require("./add");
const mult = require("./mult");
const sub = require("./sub");
const div = require("./div");

class Calculator {
    constructor() {
        this.add = add;
        this.mult = mult;
        this.sub = sub;
        this.div = div;
    }
}

const calculator = new Calculator();


