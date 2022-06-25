function Person(name, age, place) {
  this.name = name;
  this.age = age;
  this.place = place;
  this.display = function () {
    console.log(
      "Name : " + this.name + " Age : " + this.age + " Place : " + this.place
    );
  };
}

var jpu = new Person("Jayadev", 20, "Kayamkulam");

jpu.display();
