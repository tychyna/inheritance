class Vehicle {
    constructor(brand, color, speed, fuelTankAmount) {
        this.brand = brand;
        this._color = color;
        this.speed = speed;
        this.fuelTankAmount = fuelTankAmount;
    }

    set color(value) {
        this._color = value;
    };

    get color() {
        return this._color;
    };

    action() {
        console.log('The vehicle ' + this.brand + ' is moving with speed ' + this.speed + ".");
    };

    road(getDistance, consumption) {

        const averageDistance = 100;

        let time = (getDistance / this.speed) * 60 + " minutes";
        let fuelConsumption = (getDistance * consumption) / averageDistance;
        this.fuelTankAmount -= fuelConsumption;

        let data = "<p>Відстань: " + getDistance + " </p>" + "<p>Витрачений час: " + time + " </p>" + "<p>Швидкість: " + this.speed + " </p>" + "<p>Витрачене пальне: " + fuelConsumption + " </p>" + "<p>Залишилось пального: " + this.fuelTankAmount + " </p>";

        orderDocument(data);
    };
}

class Car extends Vehicle {
    constructor(brand, color, speed, fuelTankAmoun) {
        super(brand, color, speed, fuelTankAmoun);
        Car.count += 1;
    }

    checkSteeringWhellSide() {
        Car.random() > 0.5 ? console.log("Left side") : console.log("Right side");
    };

    static random() {
        return Math.random();
    }
}

function orderDocument(data) {
    let block = document.getElementById("block");
    block.innerHTML = data;
}

Car.count = 0;

let ferrari = new Car("Ferrari Enzo", "red", 100, 110);
let bmw = new Car("BMW X5", "black", 125, 130);