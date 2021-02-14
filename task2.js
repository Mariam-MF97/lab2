let vehicleCounter = 0;
class Vehicle {
  constructor(wheels = 4, speed = 100) {
    this._wheels = wheels;
    this._speed = speed;
    vehicleCounter++;
  }

  static compareSpeed(vec1, vec2) {
    if (vec1._speed > vec2._speed) {
      console.log(`first vehicle speed > second vehicle speed`);
    } else if (vec1._speed < vec2._speed) {
      console.log(`first vehicle speed < second vehicle speed`);
    } else {
      console.log(`first vehicle speed = second vehicle speed`);
    }
  }
}

let vec1 = new Vehicle(4, 100);
let vec2 = new Vehicle(2, 50);

console.log(Vehicle.compareSpeed(vec1, vec2));
console.log("number of vehicles created= " + vehicleCounter);
