function Vehicle(brand, color, spead, fuelTankAmount) {
    this.brand = brand;
    this.color = color;

    this.spead = spead;
    this.fuelTankAmount = fuelTankAmount;

    this.action = function () {
        console.log('The vehicle ' + this.brand + ' is moving with spead ' + this.spead + ".");
    }
}

function Car(brand, color, spead, fuelTankAmoun) {
    Vehicle.apply(this);
}


Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constuctor = Car;

var ferrari = new Car("Ferrari Enzo", "red", 320, 110);
console.dir(ferrari);