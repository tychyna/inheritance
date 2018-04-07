// ***************************** Vehicle Constructor

function Vehicle(brand, color, speed, fuelTankAmount) {
    this.brand = brand;
    this._color = color;

    this.speed = speed;
    this.fuelTankAmount = fuelTankAmount;
}

Vehicle.prototype = {
    set color(value) {
        console.log("asdasd 1");
        this._color = value;
    },
    get color() {
        console.log("asdasd 2");
        return this._color;
    },
};

Vehicle.prototype.action = function () {
    console.log('The vehicle ' + this.brand + ' is moving with speed ' + this.speed + ".");
}

Vehicle.prototype.road = function (getDistance, consumption) {

    var averageDistance = 100;

    var time = (getDistance / this.speed) * 60 + " minutes";
    var fuelConsumption = (getDistance * consumption) / averageDistance;
    this.fuelTankAmount -= fuelConsumption;

    var data = "<p>Відстань: " + getDistance + " </p>" + "<p>Витрачений час: " + time + " </p>" + "<p>Швидкість: " + this.speed + " </p>" + "<p>Витрачене пальне: " + fuelConsumption + " </p>" + "<p>Залишилось пального: " + this.fuelTankAmount + " </p>";

    orderDocument(data);
}

function orderDocument(data) {
    var block = document.getElementById("block");
    block.innerHTML = data;
}

// ***************************** Car Constructor

function Car(brand, color, speed, fuelTankAmoun) {
    Vehicle.apply(this, arguments);
    Car.count += 1;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constuctor = Car;

Car.prototype.checkSteeringWhellSide = function () {
    Car._random() > 0.5 ? console.log("Left side") : console.log("Right side");
}

Car.count = 0;

Car._random = function () {
    return Math.random();
}

var ferrari = new Vehicle("Ferrari Enzo", "red", 100, 110);
var bmw = new Car("BMW X5", "black", 125, 130);