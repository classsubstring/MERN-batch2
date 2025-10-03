function Car(model, brand, launchYear) {
  this.model = model;
  this.brand = brand;
  this.launchYear = launchYear;

  Car.prototype.showdetails = function () {
    console.log(
      `This is ${this.model}, from ${this.brand}, launched in ${launchYear}`
    );
  };
}

const car1 = new Car("T1", "Toyota", "2023");
console.log(car1);
