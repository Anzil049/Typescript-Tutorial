"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`${this.brand} ${this.model} is starting`);
    }
}
let myCar = new Car("Porsche", "911 GT3 RS", 2023);
myCar.start();
