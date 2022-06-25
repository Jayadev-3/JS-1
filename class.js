class Autos {
  auto() {
    console.log("This is an automotive");
  }
}

class Car extends Autos {
  constructor(Name, Capacity, Transmission) {
    super();
    this.Capacity = Capacity;
    this.Name = Name;
    this.Transmission = Transmission;
  }
  display() {
    console.log(
      "The Car is " +
        this.Name +
        " with seating capacity of " +
        this.Capacity +
        " & " +
        this.Transmission +
        " transmission"
    );
  }
}

let M800 = new Car("Maruti 800", 4, "Manual");
M800.display();
M800.auto();
