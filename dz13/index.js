const burgersMenu = [
    {name: "small", price: 50, calories: 20,},
    {name: "medium", price: 75, calories: 30,},
    {name: "big", price: 100, calories: 40,}
];

const toppingsMenu = [
    {name: "cheese", price: 10, calories: 20,},
    {name: "salad", price: 20, calories: 5,},
    {name: "potato", price: 15, calories: 10,},
    {name: "spices", price: 15, calories: 0,},
    {name: "mayo", price: 20, calories: 5,},
];

function CreateBurger(burgerName) {
    this.burger = burgersMenu.find(({name}) => name === burgerName);
    this.toppings = [];
    this.addTopping = function (toppingName) {
        const toppingItem = toppingsMenu.find(({name}) => name === toppingName)
        this.toppings.push(toppingItem);
    };

    this.removeTopping = function (toppingName) {
        this.toppings = this.toppings.filter(({name}) => name !== toppingName);
    }

    this.getPrice = function () {
        const toppingsPrice = this.toppings.reduce((acc, {price}) => {
            return acc + price;
        }, 0);

        return this.burger.price + toppingsPrice;
    };

    this.getCalories = function () {
        const toppingsCalories = this.toppings.reduce((acc, {calories}) => {
            return acc + calories;
        }, 0);

        return this.burger.calories + toppingsCalories;
    }

    this.changeBurger = function (burgerName) {
        this.burger = burgersMenu.find(({name}) => name === burgerName);
    }
}

const makeBurger = new CreateBurger("small");
makeBurger.addTopping("mayo");
makeBurger.addTopping("potato");
makeBurger.getCalories();
makeBurger.getPrice();
makeBurger.changeBurger("big");
makeBurger.getCalories();
makeBurger.getPrice();
makeBurger.removeTopping("salad");
makeBurger.getCalories();
makeBurger.getPrice();



