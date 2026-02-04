interface Vehicle {
    brand: string;
    model: string;
    year: number;

    start(): void;

}


class Car implements Vehicle {
    brand: string;
    model: string;
    year: number;


    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log(`${this.brand} ${this.model} is starting`)
    }
}

let myCar = new Car("Porsche", "911 GT3 RS", 2023);

myCar.start();