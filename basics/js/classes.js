class Car {
  constructor(model, brand, launchYear) {
    this.model = model;
    this.brand = brand;
    this.launchYear = launchYear;
  }

  showDetail() {
    console.log(
      `Model of this car is ${this.model} from ${this.brand}, launched in ${this.launchYear}`
    );
  }
}

const car1 = new Car("Fortuner", "toyota", "2025");
const car2 = new Car("Innova", "toyota", "2025");
car1.showDetail();

class ElectricCar  {
  constructor(model, brand, launchYear, batteryInfo) {
    // super(model, brand, launchYear);
    this.batteryInfo = batteryInfo;
  }

  chargging() {
    console.log(
      `The model ${this.model} is charging and the battery info is ${this.batteryInfo}`
    );
  }
}

const ec1 = new ElectricCar("Punch", "Tata", "2022", "battery1");
ec1.chargging();
ec1.showDetail();
